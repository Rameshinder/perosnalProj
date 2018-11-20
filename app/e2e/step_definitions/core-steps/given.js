import { defineSupportCode } from 'cucumber'

import checkContainsAnyText from '../support/check/checkContainsAnyText'
import checkIsEmpty from '../support/check/checkIsEmpty'
import checkContainsText from '../support/check/checkContainsText'
import checkCookieContent from '../support/check/checkCookieContent'
import checkCookieExists from '../support/check/checkCookieExists'
import checkDimension from '../support/check/checkDimension'
import checkElementExists from '../support/check/checkElementExists'
import checkEqualsText from '../support/check/checkEqualsText'
import checkModal from '../support/check/checkModal'
import checkOffset from '../support/check/checkOffset'
import checkProperty from '../support/check/checkProperty'
import checkSelected from '../support/check/checkSelected'
import checkTitle from '../support/check/checkTitle'
import checkUrl from '../support/check/checkURL'
import closeAllButFirstTab from '../support/action/closeAllButFirstTab'
import compareText from '../support/check/compareText'
import isEnabled from '../support/check/isEnabled'
import isVisible from '../support/check/isVisible'
import openWebsite from '../support/action/openWebsite'
import resizeScreenSize from '../support/action/resizeScreenSize'
import screenShot from '../support/action/screenShot'

defineSupportCode(({ Given }) => {
  Given(
    /^I open the (url|site) "([^"]*)?"$/,
    openWebsite
  )

  Given(
    /^The element "([^"]*)?" is( not)* visible$/,
    isVisible
  )

  Given(
    /^The element "([^"]*)?" is( not)* enabled$/,
    isEnabled
  )

  Given(
    /^The element "([^"]*)?" is( not)* selected$/,
    checkSelected
  )

  Given(
    /^The checkbox "([^"]*)?" is( not)* checked$/,
    checkSelected
  )

  Given(
    /^There is (an|no) element "([^"]*)?" on the page$/,
    checkElementExists
  )

  Given(
    /^The title is( not)* "([^"]*)?"$/,
    checkTitle
  )

  Given(
    /^The element "([^"]*)?" contains( not)* the same text as element "([^"]*)?"$/,
    compareText
  )

  Given(
    /^The (button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
    checkEqualsText
  )

  Given(
    /^The (button|element) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
    checkContainsText
  )

  Given(
    /^The (button|element) "([^"]*)?"( not)* contains any text$/,
    checkContainsAnyText
  )

  Given(
    /^The (button|element) "([^"]*)?" is( not)* empty$/,
    checkIsEmpty
  )

  Given(
    /^The page url is( not)* "([^"]*)?"$/,
    checkUrl
  )

  Given(
    /^The( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
    checkProperty
  )

  Given(
    /^The cookie "([^"]*)?" contains( not)* the value "([^"]*)?"$/,
    checkCookieContent
  )

  Given(
    /^The cookie "([^"]*)?" does( not)* exist$/,
    checkCookieExists
  )

  Given(
    /^The element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,
    checkDimension
  )

  Given(
    /^The element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis$/,
    checkOffset
  )

  Given(
    /^I have a screen that is ([\d]+) by ([\d]+) pixels$/,
    resizeScreenSize
  )

  Given(
    /^Screenshot "([^"]*)?"$/,
    screenShot
  )

  Given(
    /^I have closed all but the first (window|tab)$/,
    closeAllButFirstTab
  )

  Given(
    /^a (alertbox|confirmbox|prompt) is( not)* opened$/,
    checkModal
  )
})
