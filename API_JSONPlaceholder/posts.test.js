const axios = require ('axios');
const jsonData = require('./posts_env.json');

axios.interceptors.request.use(request => {
    console.log('Starting Request:', request);
    return request;
});
axios.interceptors.response.use(response => {
    console.log('Response:', response);
    return response;
}, error => {
    console.error('Error Response:', error.response);
    return Promise.reject(error); 
});
test ("GET current post", async () => {
    var response = await axios.get(`${jsonData.baseUrl}/posts/66`,
        {
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
    console.log(response.data);
    expect(response.status).toBe(200);
});
test ("GET all albums", async () => {
    var response = await axios.get(`${jsonData.baseUrl}/albums`,
        {
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
    console.log(response.data);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
});
test ("GET current photo", async () => {
    var response = await axios.get(`${jsonData.baseUrl}/photos/5`,
        {
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
    console.log(response.data);
    expect(response.status).toBe(200)
    }
)
test ("Add new post", async () => {
    var response = await axios.post(`${jsonData.baseUrl}/posts`,
        {
              title: 'dance',
              body: 'rumba',
              userId: 1,
        },
        {
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
    console.log(response.data);
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id')
});
test ("Add new post", async () => {
    var response = await axios.post(`${jsonData.baseUrl}/comments`,
        {
              "name": "Sas",
              "email": "sas@gardner.biz",
              "body": "test"
        },
        {
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
    console.log(response.data);
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('body')
});