export const combineData = (photos, usersMap, albumsMap, photoId = null) => {
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