const emptyReturn = () => {}

const state = {
  displayed: false,
  variation: 'passive',
  icon: '',
  title: '',
  message: '',
  cancelText: '',
  confirmText: '',
  buttonSecondaryText: '',
  // Input values
  confirmDisabled: false,
  hasInput: false,
  inputDisabled: false,
  inputValue: '',
  inputSelectionRange: null,
  inputPlaceholder: '',
  inputLabel: '',
  inputError: '',
  checkboxLabel: '',
  inputType: 'text',
  // Events
  onCancel: emptyReturn,
  onConfirm: emptyReturn,
  onInput: emptyReturn,
  onCheckboxValueChanged: emptyReturn,
  onConfirmSecondary: emptyReturn,
  contextualHelperLabel: '',
  contextualHelperData: {},
  customContent: ''
}

const actions = {
  createModal({ commit }, modal) {
    commit('CREATE_MODAL', modal)
  },

  hideModal({ commit }) {
    commit('HIDE_MODAL')
  },

  setModalInputErrorMessage({ commit }, error) {
    commit('SET_INPUT_ERROR_MESSAGE', error)
  },

  toggleModalConfirmButton({ commit }) {
    commit('TOGGLE_MODAL_CONFIRM_BUTTON')
  }
}

const mutations = {
  CREATE_MODAL(state, modal) {
    state.displayed = true
    state.variation = modal.variation || 'passive'
    state.icon = modal.icon
    state.title = modal.title
    state.message = modal.message
    state.buttonSecondaryText = modal.buttonSecondaryText
    state.checkboxLabel = modal.checkboxLabel || ''
    state.cancelText = modal.cancelText || 'Cancel'
    state.confirmText = modal.confirmText || 'Confirm'
    state.confirmDisabled = modal.confirmDisabled || false
    state.onCancel = modal.onCancel
    state.onConfirm = modal.onConfirm
    state.hasInput = modal.hasInput || false
    state.inputValue = modal.inputValue || null
    state.inputSelectionRange = modal.inputSelectionRange
    state.inputDescription = modal.inputDescription || null
    state.inputLabel = modal.inputLabel || null
    state.inputError = modal.inputError || null
    state.inputDisabled = modal.inputDisabled || false
    state.inputType = modal.inputType || 'text'
    state.onInput = modal.onInput || emptyReturn
    state.onCheckboxValueChanged = modal.onCheckboxValueChanged || emptyReturn
    state.onConfirmSecondary = modal.onConfirmSecondary || emptyReturn
    state.contextualHelperLabel = modal.contextualHelperLabel
    state.contextualHelperData = modal.contextualHelperData
    state.customContent = modal.customContent || ''
  },

  HIDE_MODAL(state) {
    state.displayed = false
  },

  SET_INPUT_ERROR_MESSAGE(state, error) {
    state.inputError = error
  },

  TOGGLE_MODAL_CONFIRM_BUTTON(state) {
    state.confirmDisabled = !state.confirmDisabled
  }
}

export default {
  state,
  actions,
  mutations
}
