import { fetchPhotos, fetchUsers, fetchAlbums } from '../services/AllServiceImport.js';

const combineData = (photos, usersMap, albumsMap, photoId = null) => {
  const result = photos.map(photo => {
    if (photoId !== null && photo.id !== photoId) return null;

    const album = albumsMap.get(photo.albumId);
    if (!album) return null;
    const user = usersMap.get(album.userId);
    if (!user) return null;

    return {
      id: photo.id,
      title: photo.title,
      url: photo.url,
      thumbnailUrl: photo.thumbnailUrl,
      album: {
        id: album.id,
        title: album.title,
        user: {
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          address: user.address,
          phone: user.phone,
          website: user.website,
          company: user.company
        }
      }
    };
  }).filter(item => item !== null);

  return photoId !== null ? result[0] : result;
};

export const searchTitleData = async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  let { title, 'album.title': albumTitle, 'album.user.email': userEmail, limit, offset } = req.query;

  limit = limit ? parseInt(limit, 10) : 25;
  offset = offset ? parseInt(offset, 10) : 0;

  try {
    const [photos, users, albums] = await Promise.all([fetchPhotos(), fetchUsers(), fetchAlbums()]);

    const usersMap = new Map(users.map(user => [user.id, user]));
    const albumsMap = new Map(albums.map(album => [album.id, album]));

    let filteredPhotos = photos;

    if (title) {
      filteredPhotos = filteredPhotos.filter(photo => photo.title.toLowerCase().includes(title.toLowerCase()));
    }

    if (albumTitle) {
      filteredPhotos = filteredPhotos.filter(photo => {
        const album = albumsMap.get(photo.albumId);
        return album && album.title.toLowerCase().includes(albumTitle.toLowerCase());
      });
    }

    if (userEmail) {
      filteredPhotos = filteredPhotos.filter(photo => {
        const album = albumsMap.get(photo.albumId);
        const user = usersMap.get(album.userId);
        return user && user.email.toLowerCase().includes(userEmail.toLowerCase());
      });
    }

    const totalFiltered = filteredPhotos.length;
    const paginatedPhotos = filteredPhotos.slice(offset, offset + limit);
    const combinedData = combineData(paginatedPhotos, usersMap, albumsMap);
    
    res.json({ data: combinedData, total: totalFiltered });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCombinedDataById = async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const photoId = parseInt(req.params.id, 10);

  try {
    const [photos, users, albums] = await Promise.all([fetchPhotos(), fetchUsers(), fetchAlbums()]);

    const usersMap = new Map(users.map(user => [user.id, user]));
    const albumsMap = new Map(albums.map(album => [album.id, album]));

    const combinedData = combineData(photos, usersMap, albumsMap, photoId);
    if (!combinedData) {
      return res.status(404).json({ error: 'Photo not found' });
    }
    res.json(combinedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
