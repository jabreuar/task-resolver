const axios = require('axios');
jest.mock('axios');

const request = require('../../src/api/request');
const { GET_TASK_URI, POST_TASK_URI } = require('../../src/api/api.config');

test('Should get a task', async () => {
  const mockResult = {
    data: { "id": "15d8f632-eb26-4313-a9b5-ca56f07e7a7d", "operation": "remainder", "left": -4223810109848959, "right": -2366395262356207 },
  };
  axios.get.mockImplementationOnce(() => Promise.resolve(mockResult));
  await expect(request.get()).resolves.toEqual(mockResult.data);
});

test('Should submit a task', async () => {
  const mockRequest = {
    data: {
      "id": "c632688e-e414-42d7-a3de-b079d8e83c54",
      "result": 1
    }
  };
  const mockResponse = {
    data: 'Correct',
  };
  axios.post.mockImplementationOnce(() => Promise.resolve(mockResponse));
  await expect(request.post(mockRequest.data)).resolves.toEqual(mockResponse.data);
});