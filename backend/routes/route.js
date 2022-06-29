import { Router } from 'express'
const router = Router()
const imgURL = new Array(20).fill(0).map((_, i) => `https://mdbootstrap.com/img/Photos/Slides/img%20(${i + 115}).jpg`)

router.post('/login', (req, res) => {
  const username = req.body.username
  const password = req.body.password
  res.send({
    code: '200',
    msg: '登录成功'
  })
})

router.get('/getCarousel', (req, res) => {
  console.log('receive getCarousel request')
  res.send({
    code: '200',
    carouselList: [
      {
        id: 0,
        url: imgURL[0],
        title: 'The first artwork',
        description: 'Description for the first artwork.'
      },
      {
        id: 1,
        url: imgURL[1],
        title: 'The second artwork',
        description: 'Description for the second artwork.'
      },
      {
        id: 2,
        url: imgURL[2],
        title: 'The third artwork',
        description: 'Description for the third artwork.'
      }
    ]
  })
})

router.get('/getHomeDisplay', (req, res) => {
  console.log('receive getHomeDisplay request')
  res.send({
    code: '200',
    displayList: [
      {
        id: 3,
        url: imgURL[3],
        title: 'The first artwork card',
        description: 'This is a responsive box.When your screen size is small enough, the text will be arranged below the picture.',
        uploadTime: 'Uploaded 3 minutes ago'
      },
      {
        id: 4,
        url: imgURL[4],
        title: 'The second artwork card',
        description: 'When your screen size is large enough, the text will be arranged on the right side of the picture.',
        uploadTime: 'Uploaded 1 day ago'
      },
      {
        id: 5,
        url: imgURL[5],
        title: 'The third artwork card',
        description: 'On the mobile phone, if you click this box, it will become larger.On the PC side, when your mouse hovers over the box, so will it.',
        uploadTime: 'Uploaded 12 day ago'
      }
    ]
  })
})

router.get('/getGallery', (req, res) => {
  console.log('receive getGallery request')
  res.send({
    code: '200',
    galleryList: imgURL.slice(6, 12)
  })
})

router.get('/getDetail/:id', (req, res) => {
  const id = req.params.id
  console.log('receive getDetail request', id)
  res.send({
    code: '200',
    url: imgURL[id],
    artistName: 'Name of the Artist',
    artistTitle: 'title of the Artist',
    detailDescription: `This is the NO.${id} art work.Detail description for the master pieces.I would like to add some words to test the effect of paragraph display.You can also click the image to see in detail.`,
    tagList: ['tag1', 'shengjiangshaorou', 'qiutian', 'tag8090', 'commontag', 'cool'],
    commentList: ["That's so cool.I like it."]
  })
})

router.get('/getWaterfall', (req, res) => {
  const n = req.query.page
  const category = req.query.category
  const imgs = new Array(20).fill(0).map((_, i) => `https://www.photock.jp/photo/middle/photo0000-${i + 5555 + n * 20 + category * 60}.jpg`)
  console.log(n)
  res.send({
    code: '200',
    imgList: imgs
  })
})

export default router
