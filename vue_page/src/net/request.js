import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8080';
axios.defaults.timeout = 2000;

export function getQueryEveryDay(path) {
    return axios.get('/queryEveryDay')
        .then(res => {
            return res.data.data[0];
        });
}

export function queryBlogByPage(page, pageSize) {
    return axios.get('/queryBlogByPage', {
        params: {
            page,
            pageSize
        }
    }).then(res => {
        return res.data;
    })
}

export function queryArticleById(id) {
    return axios.get('/queryArticleById', {
        params: {
            id
        }
    }).then(res => {
        return res.data;
    })
}

export function sendComment(bid, name, email, content, reply, reply_name) {
    console.log(reply_name);
    return axios.get('/addComment', {
        params: {
            bid,
            email,
            userName: name,
            parent: reply,
            parentName: reply_name,
            content
        }
    }).then(res => {
        return res.data;
    })
}

export function queryRandomCode() {
    return axios.get('/queryRandomCode').then(res => {
        return res.data;
    })
}

export function queryCommentsByBlogId(bid) {
    return axios.get('/queryCommentsByBlogId', {
        params: {
            bid
        }
    }).then(res => {
        return res.data;
    })
}

export function queryAllTags() {
    return axios.get('/queryAllTags').then(res => {
        return res.data;
    })
}

export function queryBlogByTag(tagId) {
    return axios.get('/queryBlogByTag', {
        params: {
            tagId
        }
    }).then(res => {
        return res.data;
    })
}

export function queryNewMessage() {
    return axios.get('/queryNewMessage').then(res => {
        return res.data;
    })
}

export function insertMessage(user_name, content) {
    return axios.post(`/insertMessage?userName=${user_name}`, content).then(res => {
        return res.data;
    })
}

export function queryAllMessage(blogId) {
    return axios.get('/queryAllMessage', {
        params: {blogId}
    }).then(res => {
        return res.data;
    })
}

export function addViews(blogId) {
    return axios.get('/addViews',{
        params:{blogId}
    }).then(res => {
        return res.data;
    })
}

export function queryHotByViews() {
    return axios.get('/queryHotByViews').then(res => {
        return res.data;
    })
}