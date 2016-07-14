$().ready ->
  $stars = undefined
  setScoreValue = undefined
  currentScore = undefined
  $stars = $('.js-stars .js-star')
  $resetStars = $('.js-resetStars')
  $fullStars = $('.js-fullStars')
  $toggleSkin = $('.js-toggleSkin')
  $toggleSkin.on 'click', ->
    $('body').toggleClass 'i-dark'
    false
  $resetStars.on 'click', ->
    currentScore = 0
    setScoreValue currentScore
    false
  $fullStars.on 'click', ->
    currentScore = 5
    setScoreValue currentScore
    false
  # наводим на звездочку
  $stars.on 'mouseenter', (e) ->
    value = $(e.currentTarget).data('value')
    setScoreValue value
  # уводим со звездочки
  $stars.on 'mouseleave', ->
    setScoreValue currentScore
    return
  # кликаем и фиксируем позицию
  $stars.on 'click', (e) ->
    value = $(e.currentTarget).data('value')
    currentScore = value
    setScoreValue value
    false

  setScoreValue = (index) ->
    $stars.removeClass('i-hover i-active').filter(':lt(' + index + ')').addClass 'i-hover'
    return

  setScoreValue = (index) ->
    $stars.removeClass('i-hover i-active').filter(':lt(' + index + ')').addClass 'i-hover'
    return

  currentScore = 3
  setScoreValue currentScore
  return

