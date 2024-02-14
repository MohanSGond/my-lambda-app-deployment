exports.handler = async (event) => {
    // TODO: implement your application logic here.
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};