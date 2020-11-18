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
 getMorePosts(link){
    return apiClient(link)
 },
  getAuthor(slug){
    return apiClient.get(`authors?slug=${slug}`)
  },
  getAuthorPosts(slug){
    return apiClient.get(`/author/${slug}/posts`)
  },
  getCategory(category){
    return apiClient.get(`posts?published_at!=null&sort_by!=published_at&paginate=2&assets&type=${category}`)
  },
  getTag(tag){
    return apiClient.get(`/tags/${tag}`)
  },
  getSearch(filter){
    return apiClient.get(`/search/posts?search=${filter}`)
  },
  getLayout(){
    return apiClient.get(`layout`)
  },
  getContactMessage(){
    return apiClient.get(`contact`)
  },
  storeContactMessage(form){
    return apiClient.post(`contact`,form)
  },
  checkRecaptcha(token){
    return apiClient.post(`recaptcha`, token)
  }


}
