const router = require('express').Router();
const bcrypt = require('bcrypt');
const Blog = require('../models/blog');
const User = require('../models/user');
const { initialBlogs, initialUsers } = require('../tests/api/test_helper');

router.post('/reset', async (request, response) => {
    await Blog.deleteMany({});
    await User.deleteMany({});

    await Promise.all(
        initialUsers.map(async (user) => {
            const newUser = new User({
                username: user.username,
                name: user.name,
                password: await bcrypt.hash(user.password, 10),
            });
            return await newUser.save();
        })
    );

    const someUser = await User.findOne({ username: 'user1' });

    const savedBlogs = await Promise.all(
        initialBlogs.map((blog) => {
            const newBlog = Blog(blog);
            newBlog.user = someUser._id;
            return newBlog.save();
        })
    );

    someUser.blogs = savedBlogs.map((blog) => blog._id);
    await someUser.save();

    response.status(204).end();
});

module.exports = router;
