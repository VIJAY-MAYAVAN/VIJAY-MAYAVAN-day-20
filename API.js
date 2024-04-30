const urls = [
    'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1',
    'https://api-thirukkural.web.app/api?num=1',
    'https://www.stands4.com/services/v2/syno.php?'
    ];

    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
    };

    const displayData = (elementId, data) => {
      const list = document.getElementById(elementId);
      if (data) {
        data.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = item.name; // Change as per API response structure
          list.appendChild(listItem);
        });
      } else {
        const listItem = document.createElement('li');
        listItem.textContent = 'Failed to fetch data'; // Error message if data fetch fails
        list.appendChild(listItem);
      }
    };

    urls.forEach(async (url, index) => {
      const data = await fetchData(url);
      displayData(`api${index + 1}Data`, data);
    });