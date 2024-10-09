const { UserControllers } = require('./Controllers/userControl.js')
const userController = new UserControllers();
test('Get User Profile', async()=> {
    await userController.login()
    const response = await userController.getUserProfile()
    expect(response.status).toBe(200);
    expect(response.data.data.name).toBe('Sem')
})
test ('Get current user', async()=> {
   await userController.login()
   const response = await userController.getCurrentUser()
   console.log(response.data)
   expect(response.status).toBe(200);
   expect(response.data.data.userId).toBe(153576)
   
})
