import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://laravel.net/api/`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getNews(){
    return apiClient.get('posts?published_at!=null&sort_by!=published_at&limit=10&type=news')
  },
  getReviews(){
    return apiClient.get('posts?published_at!=null&sort_by!=published_at&limit=10&type=reviews')
  },
  getLatest(){
    return apiClient.get('posts?published_at!=null&sort_by!=published_at&limit=10&type=tutorials')
  },
  getPost(category, slug){
    return apiClient.get(`posts?type=${category}&slug=${slug}`)
  },
  getTop(){
    return apiClient.get(`posts?published_at!=null&sort_by!=views&limit=10&assets`)
  },
  getPopular(){
    return apiClient.get(`posts?published_at!=null&sort_by!=views&limit=5&assets`)
  },
  getRecent(){
    return apiClient.get(`posts?published_at!=null&sort_by!=published_at&limit=5&assets`)
  },
  getSideTop(){
    return apiClient.get(`posts?published_at!=null&sort_by!=views&limit=5&type=news&assets`)
  },
  getAuthors(){
    return apiClient.get(`authors`)
  },
  getMoreAuthors(link){
    return apiClient(link)
  },
  getAuthor(slug){
    return apiClient.get(`authors?slug=${slug}`)
  },
  getAuthorPosts(id){
    return apiClient.get(`/author/${id}/posts`)
  },
  getCategory(category){
    return apiClient.get(`posts?published_at!=null&sort_by!=published_at&limit=10&assets&type=${category}`)
  }


}
