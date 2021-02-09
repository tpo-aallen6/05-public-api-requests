/* eslint-env mocha */

'use strict'

const expect = window.chai.expect

// before - runs before the tests
// after - runs after the tests
// describe - the thing we are testing (high level)
// context - under specific circumstances
// it - an actual test

describe('meets expectations', () => {
  describe('user gallery', () => {
    it('must have 12 entries', () => {
      const expected = 12
      const actual = document.querySelector('#gallery').children.length

      expect(actual).to.equal(expected)
    })

    describe('each entry', () => {
      it('must be a DIV element', () => {
        const expected = 'DIV'

        document.querySelector('#gallery').children.forEach((child) => {
          const actual = child.tagName
          expect(actual).to.equal(expected)
        })
      })

      it('must have the correct CSS class name', () => {
        const expected = 'card'

        document.querySelector('#gallery').children.forEach((child) => {
          const actual = child.className
          expect(actual).to.equal(expected)
        })
      })

      describe('the card contents', () => {
        it('must have the expected children', () => {
          const expected = [
            'DIV.card-img-container',
            'DIV.card-info-container'
          ]

          const firstCard = document.querySelector('#gallery').children[0]
          const actual = Array.from(firstCard.children).map((child) => {
            return `${child.tagName}.${child.className}`
          })

          expect(actual).to.deep.equal(expected)
        })
      })
    })
  })
})

describe('exceeds expectations', () => {
  //
})