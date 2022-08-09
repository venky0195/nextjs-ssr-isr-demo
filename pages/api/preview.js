export default async (req, res) => {
    // Check the secret and next parameters
    // This secret should only be known to this API route and the CMS
    // if (req.query.secret !== '123') {
    //   return res.status(401).json({ message: 'Invalid token' })
    // }
    // Enable Preview Mode by setting the cookies
    res.setPreviewData({
        preview: 123
    })

    res.redirect(`/posts/${req.query.id}`)
  }