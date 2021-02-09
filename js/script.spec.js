/* eslint-env mocha */
/* global loadData */

'use strict'

const expect = window.chai.expect

describe('meets expectations', () => {
  before(() => {
    return loadData()
  })

  describe('user gallery', () => {
    it('must have 12 entries', () => {
      const expected = 12
      const actual = window.ui.userGallery.children.length

      expect(actual).to.equal(expected)
    })

    describe('each entry', () => {
      it('must be a DIV element', () => {
        const expected = 'DIV'

        window.ui.userGallery.children.forEach((child) => {
          const actual = child.tagName
          expect(actual).to.equal(expected)
        })
      })

      it('must have the correct CSS class name', () => {
        const expected = 'card'

        window.ui.userGallery.children.forEach((child) => {
          const actual = child.className
          expect(actual).to.equal(expected)
        })
      })

      describe('the card contents', () => {
        let cards = null

        before(() => {
          cards = window.ui.userGallery.children
        })

        it('must have the expected children', () => {
          const expected = [
            'DIV.card-img-container',
            'DIV.card-info-container'
          ]

          cards.forEach((card) => {
            const actual = Array.from(card.children).map((child) => {
              return `${child.tagName}.${child.className}`
            })

            expect(actual).to.deep.equal(expected)
          })
        })

        describe('the first child', () => {
          it('must be the expected markup', () => {
            const pattern = /^<img class="card-img" src="https:\/\/randomuser\.me\/api\/portraits\/med\/(men|women)\/\d+\.jpg" alt="profile picture">$/

            cards.forEach((card) => {
              const actual = card.children[0].innerHTML.trim()
              expect(actual).to.match(pattern)
            })
          })
        })

        describe('the second child', () => {
          it('must have the expected children', () => {
            const expected = ['H3', 'P', 'P']

            cards.forEach((card) => {
              const actual = Array.from(card.children[1].children).map((child) => { return child.tagName })
              expect(actual).to.deep.equal(expected)
            })
          })

          describe('the first child', () => {
            it('must have the expected CSS class(es)', () => {
              const expected = ['card-name', 'cap']

              cards.forEach((card) => {
                const actual = card.children[1].children[0].className.split(' ')
                expect(actual).to.have.members(expected)
              })
            })

            it('must have the expected text content', () => {
              const pattern = /^\w+ \w+$/

              cards.forEach((card) => {
                const actual = card.children[1].children[0].textContent
                expect(actual).to.match(pattern)
              })
            })
          })

          describe('the second child', () => {
            it('must have the expected CSS class(es)', () => {
              const expected = ['card-text']

              cards.forEach((card) => {
                const actual = card.children[1].children[1].className.split(' ')
                expect(actual).to.have.members(expected)
              })
            })

            it('must have the expected text content', () => {
              const pattern = /^\w+\.\w+@example\.com$/

              cards.forEach((card) => {
                const actual = card.children[1].children[1].textContent
                expect(actual).to.match(pattern)
              })
            })
          })

          describe('the third child', () => {
            it('must have the expected CSS class(es)', () => {
              const expected = ['card-text', 'cap']

              cards.forEach((card) => {
                const actual = card.children[1].children[2].className.split(' ')
                expect(actual).to.have.members(expected)
              })
            })

            it('must have the expected text content', () => {
              const pattern = /^([A-Z][a-z]+ ?)+, ([A-Z][a-z]+ ?)+$/

              cards.forEach((card) => {
                const actual = card.children[1].children[2].textContent
                expect(actual).to.match(pattern)
              })
            })
          })
        })
      })
    })
  })
})

describe('exceeds expectations', () => {

})
