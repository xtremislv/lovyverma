// friends
export const friendsHeadLine = "Lovy' friends"
export const friendsIntro = "Meet some interesting friends."


// friends
export type FriendItemType = {
  name: string
  description?: string
  link: { href: string, label?: string }
  logo?: string
}

export const friends: Array<FriendItemType> = [
  {
    name: 'Lovy Verma',
    link: { href: 'https://xtremislv.github.io/' },
  },
]