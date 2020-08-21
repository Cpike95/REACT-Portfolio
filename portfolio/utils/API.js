export default {
    getUsersByLanguage: function(language) {
      return new Promise((resolve, reject) => {
        axios
          .get("https://api.github.com/orgs/github//user/Cpike95/repos")
          .then(res => {
            const users = res.data;
            const results = users.map(user => {
              return {
                login: user.login,
                image: user.avatar_url,
                language: language
              };
            });
            resolve(results);
          })
          .catch(err => reject(err));
      });
    },
    // Return a Promise to simulate an async call
    getLanguagesList: function() {
      return new Promise(resolve => {
        resolve(languages);
      });
    }
  };