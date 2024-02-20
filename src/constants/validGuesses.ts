import { CONFIG } from './config'

export const VALIDGUESSES = [
  'adaaw',
  'adixs',
 
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
