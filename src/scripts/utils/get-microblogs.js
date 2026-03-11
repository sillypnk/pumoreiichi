import { MICROBLOGS as microblogs } from '../microblogsData.js'

// Now returns an array sorted out from latest date to oldest date
/**
 * @type {Array}
 */
const recentMicroblogs = microblogs.sort(
  (old, recent) => new Date(recent.date) - new Date(old.date),
)
const el = document.querySelector('#microblog-recent')
el.innerHTML = recentMicroblogs[0].content
