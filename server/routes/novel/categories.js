const router = require('express').Router()
const categories = require('../../crawler/categories.js')
const { responseWrapper } = require('../../modules/utils.js')
const DB = require('../../modules/DB.js')

for (let category of categories) {
	delete category.startPage
	delete category.done
}

const countNovel = cateID => {
	return new Promise((resolve, reject) => {
		DB['NovelModel'].find({categories: {$all: [cateID]}}).then(docs => {
			resolve(docs.length)
		})
	})
}

router.get('/categories', (req, res) => {
	const sex = req.query.sex ? req.query.sex : null
	const sexCode = sex === 'boy' ? 1 : sex === 'girl' ? 0 : null
	!async function(){
		for(let category of categories) {
			category.count = await countNovel(category.cateID)
		}
		res.send(
			responseWrapper({
				code: 1,
				data: typeof sexCode === 'number' ? categories.filter(c => c.sex === sexCode) : categories
			})
		)
	}()
})

router.get('/categories/:cateID', (req, res) => {
	let { cateID } = req.params
	if (categories.find(category => category.cateID === cateID)) {
		res.send(responseWrapper({ code: 1, data: cateID }))
	} else {
		res.send(responseWrapper({ code: 0, data: '不存在此分类!' }))
	}
})

module.exports = router
