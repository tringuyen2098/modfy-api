import app from './src/app.js'

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST;

app.listen(PORT, () => {
    console.log(`Server running on ${HOST}:${PORT}`);
});