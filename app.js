// Profile data
const profiles = {
    john: {
      name: "John Doe",
      description: "Software Engineer from New York",
      mapLocation: "https://maps.google.com/maps?q=40.7128,-74.0060&z=15&output=embed",
      imgSrc: "https://media.licdn.com/dms/image/D4D12AQGA2GDQSJN0AA/article-cover_image-shrink_600_2000/0/1715587246599?e=2147483647&v=beta&t=8oWcqRnriK2ML7myqCqmd-yG6LJd7p4OBbKlda5KAhI"
    },
    jane: {
      name: "Jane Smith",
      description: "Designer from London",
      mapLocation: "https://maps.google.com/maps?q=51.5074,-0.1278&z=15&output=embed",
      imgSrc: "https://media.licdn.com/dms/image/v2/D5612AQElteyhpkFhXA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1715591944155?e=2147483647&v=beta&t=fe_nB0PyPEIkhKsN4a1Kym-aIIVl9TzmBm56GZFjTuo"
    },
    aatir: {
      name: "Aatir Daniyal",
      description: "Software Engineer from mumbai, india",
      mapLocation: "https://maps.google.com/maps?q=19.0760,72.8777&z=15&output=embed",
      imgSrc: "https://media.licdn.com/dms/image/v2/D5603AQFXfgcQT8E-dw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722861713179?e=1742428800&v=beta&t=ZlnIXFdit5Uaq35EhVTDov4ojrIf0Kxkc6PSwRbd43Y"
    },
    anjlesh: {
      name: "Anjlesh Wasule",
      description: "Backend Developer from mumbai, india",
      mapLocation: "https://maps.google.com/maps?q=19.0760,72.8777&z=15&output=embed",
      imgSrc: "https://media.licdn.com/dms/image/v2/D5603AQHmamn-_3pQXQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726404810093?e=2147483647&v=beta&t=dDEz-2YcTSmM6I9i524oRMFddWlXpEcC5tS73sFfxJc"
    },
    ahmer: {
      name: "Ahmer Faraz",
      description: "Python Developer from mumbai, india",
      mapLocation: "https://maps.google.com/maps?q=19.0760,72.8777&z=15&output=embed",
      imgSrc: "https://media.licdn.com/dms/image/v2/D5603AQETKfIc8TbztQ/profile-displayphoto-shrink_200_200/B56ZQtzSmmHoAY-/0/1735935211036?e=2147483647&v=beta&t=9K65dL47oVHOQK9ZzJzawOGEVpuxL-K04KZOGsNTV-M"
    },
    // Add more profiles as needed
  };
  
  // Initialize profile list
  window.onload = function() {
    displayProfiles(Object.values(profiles));
  };
  
  // Function to display profiles on the page
  function displayProfiles(profileData) {
    const profileList = document.getElementById("profile-list");
    profileList.innerHTML = ''; // Clear previous profiles
    profileData.forEach(profile => {
      const profileCard = document.createElement("div");
      profileCard.classList.add("profile-card");
      profileCard.innerHTML = `
        <img src="${profile.imgSrc}" alt="${profile.name}" />
        <h3>${profile.name}</h3>
        <p>${profile.description}</p>
      `;
      profileCard.onclick = function() {
        selectProfile(profile);
      };
      profileList.appendChild(profileCard);
    });
  }
  
  // Function to select a profile
  function selectProfile(profile) {
    document.getElementById("profile-name").innerText = profile.name;
    document.getElementById("profile-description").innerText = profile.description;
    const mapContainer = document.getElementById("map-container");
    mapContainer.innerHTML = `<iframe src="${profile.mapLocation}" width="100%" height="500"></iframe>`;
  }
  
  // Function to search profiles
  function searchProfiles() {
    const searchValue = document.getElementById("search-bar").value.toLowerCase();
    const filteredProfiles = Object.values(profiles).filter(profile =>
      profile.name.toLowerCase().includes(searchValue)
    );
    displayProfiles(filteredProfiles);
  }
  