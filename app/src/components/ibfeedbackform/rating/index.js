import React, {Component} from 'react'
import {MainWrapper, StarRating, RatingWrapper, IconWrapper} from './styles'
import Icon from '../../icon'
import AppConstants from '../../../common/utils/constant'
import styleVars from '../../../common/styles-global/global'
class Rating extends Component {
  constructor (props) {
    super(props)
    this.initialize = this.initialize.bind(this)
    this.initialize()
    this.initializeState()
  }

  initialize () {
    this.setRating = this.setRating.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
  }

  initializeState () {
    this.state = {
      rating: this.props.rating || 0,
      starSelected: false
    }
  }

  onKeyPress (e, rating) {
    if (e.key === 'Enter') {
      e.target.value = rating
      this.setRating(e)
    }
  }

  setRating (e) {
    this.setState({
      rating: e.target.value,
      starSelected: true
    }, function () {
      this.props.callbackFromParent(this.state.rating)
    })
  }

  render () {
    const {starSelected, rating} = this.state
    return (
      <MainWrapper >
        <RatingWrapper >

          <StarRating data-test-id='1-star' type='radio' id='1-star' name='rating' value='1' onClick={this.setRating} onKeyPress={this.onKeyPress} tabIndex={4} />
          <label htmlFor='1-star' className='star'>{starSelected && rating >= 1 ? <IconWrapper tabIndex={0} aria-label='1-rating-star' onKeyUp={(e) => { this.onKeyPress(e, 1) }}><Icon data-test-id='1-rating-star-select' iconName={AppConstants.STAR_SELECT_ICON} id={AppConstants.STAR_SELECT_ID} viewBox='0 0 40 40' stroke={styleVars.color.chatIcon} strokeWidth='3' strokeLinejoin='round' transform='translate(1,2)' /></IconWrapper>
            : <IconWrapper tabIndex={0} aria-label='1-rating-star' onKeyUp={(e) => { this.onKeyPress(e, 1) }}><Icon data-test-id='1-rating-star' iconName={AppConstants.STAR_UNSELECT_ICON} color={styleVars.color.iconFillColor} id={AppConstants.STAR_UNSELECT_ID} viewBox='0 0 40 40' stroke={styleVars.color.starunselectColor} strokeWidth='3' strokeLinejoin='round' transform='translate(1,2)' /></IconWrapper>}</label>
          <StarRating data-test-id='2-star' type='radio' id='2-stars' name='rating' value='2' onClick={this.setRating} onKeyPress={this.onKeyPress} tabIndex={3} />
          <label htmlFor='2-stars' className='star' >{starSelected && rating >= 2 ? <IconWrapper tabIndex={0} aria-label='2-rating-star' onKeyUp={(e) => { this.onKeyPress(e, 2) }}><Icon data-test-id='2-rating-star-select' iconName={AppConstants.STAR_SELECT_ICON} id={AppConstants.STAR_SELECT_ID} viewBox='0 0 40 40' stroke={styleVars.color.chatIcon} strokeWidth='3' strokeLinejoin='round' transform='translate(1,2)' /></IconWrapper>
            : <IconWrapper tabIndex={0} aria-label='2-rating-star' onKeyUp={(e) => { this.onKeyPress(e, 2) }}><Icon data-test-id='2-rating-star' iconName={AppConstants.STAR_UNSELECT_ICON} color={styleVars.color.iconFillColor} id={AppConstants.STAR_UNSELECT_ID} viewBox='0 0 40 40' stroke={styleVars.color.starunselectColor} strokeWidth='3' strokeLinejoin='round' transform='translate(1,2)' /></IconWrapper>}</label>
          <StarRating data-test-id='3-star' type='radio' id='3-stars' name='rating' value='3' onClick={this.setRating} onKeyPress={this.onKeyPress} tabIndex={2} />
          <label htmlFor='3-stars' className='star'>{starSelected && rating >= 3 ? <IconWrapper tabIndex={0} aria-label='3-rating-star' onKeyUp={(e) => { this.onKeyPress(e, 3) }}><Icon data-test-id='3-rating-star-select' iconName={AppConstants.STAR_SELECT_ICON} id={AppConstants.STAR_SELECT_ID} viewBox='0 0 40 40' stroke={styleVars.color.chatIcon} strokeWidth='3' strokeLinejoin='round' transform='translate(1,2)' /></IconWrapper>
            : <IconWrapper tabIndex={0} aria-label='3-rating-star' onKeyUp={(e) => { this.onKeyPress(e, 3) }}><Icon data-test-id='3-rating-star' iconName={AppConstants.STAR_UNSELECT_ICON} color={styleVars.color.iconFillColor} id={AppConstants.STAR_UNSELECT_ID} viewBox='0 0 40 40' stroke={styleVars.color.starunselectColor} strokeWidth='3' strokeLinejoin='round' transform='translate(1,2)' /></IconWrapper>}</label>
          <StarRating data-test-id='4-star' type='radio' id='4-stars' name='rating' value='4' onClick={this.setRating} onKeyPress={this.onKeyPress} tabIndex={1} />
          <label htmlFor='4-stars' className='star'>{starSelected && rating >= 4 ? <IconWrapper tabIndex={0} aria-label='4-rating-star' onKeyUp={(e) => { this.onKeyPress(e, 4) }}><Icon data-test-id='4-rating-star-select' iconName={AppConstants.STAR_SELECT_ICON} id={AppConstants.STAR_SELECT_ID} viewBox='0 0 40 40' stroke={styleVars.color.chatIcon} strokeWidth='3' strokeLinejoin='round' transform='translate(1,2)' /></IconWrapper>
            : <IconWrapper tabIndex={0} aria-label='4-rating-star' onKeyUp={(e) => { this.onKeyPress(e, 4) }}><Icon data-test-id='4-rating-star' iconName={AppConstants.STAR_UNSELECT_ICON} color={styleVars.color.iconFillColor} id={AppConstants.STAR_UNSELECT_ID} viewBox='0 0 40 40' stroke={styleVars.color.starunselectColor} strokeWidth='3' strokeLinejoin='round' transform='translate(1,2)' /></IconWrapper>}</label>
          <StarRating data-test-id='5-star' type='radio' id='5-stars' name='rating' value='5' onClick={this.setRating} onKeyPress={this.onKeyPress} tabIndex={0} />
          <label htmlFor='5-stars' className='star'>{starSelected && rating >= 5 ? <IconWrapper tabIndex={0} aria-label='5-rating-star' onKeyUp={(e) => { this.onKeyPress(e, 5) }}><Icon data-test-id='5-rating-star-select' iconName={AppConstants.STAR_SELECT_ICON} id={AppConstants.STAR_SELECT_ID} viewBox='0 0 40 40' stroke={styleVars.color.chatIcon} strokeWidth='3' strokeLinejoin='round' transform='translate(1,2)' /></IconWrapper>
            : <IconWrapper tabIndex={0} aria-label='5-rating-star' onKeyUp={(e) => { this.onKeyPress(e, 5) }}><Icon data-test-id='5-rating-star' iconName={AppConstants.STAR_UNSELECT_ICON} color={styleVars.color.iconFillColor} id={AppConstants.STAR_UNSELECT_ID} viewBox='0 0 40 40' stroke={styleVars.color.starunselectColor} strokeWidth='3' strokeLinejoin='round' transform='translate(1,2)' /></IconWrapper>}</label>

        </RatingWrapper>
      </MainWrapper>
    )
  }
}

export default Rating
