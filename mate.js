const item = document.createElement('li')
item.className = 'nav-item'
const link = document.createElement('a')
link.href = window.location.href.replace('etherscan.io', 'etherscan.deth.net')
link.className = 'nav-link'
link.target = '_blank'
link.text = 'View in VS Code'
item.appendChild(link)
document.querySelector('#contracts > div > #nav_subtabs').appendChild(item)