import {
  Messages, Header, FormLogin, Register, NotFound
} from '../components'
// import Content from '../components/Messages/Content';

export const routes = [
  { path: '/', component: Header },
  { path: '/login', component: FormLogin },
  { path: '/register', component: Register },
  // {path: '/service', component: Services},
  // {path: '/work', component: Works},
  // {path: '/testimonial', component: Testimo},
  // {path: '/blog', component: Blog},
  // {path: '/team', component: Teams},
  // {path: '/contact', component: Contact},
  { path: '/messages', component: Messages },
  // {path: '/messages/:id', component: Content},
  { component: NotFound }
]
