import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'b',
  'd',
  'e',
'f',
  'g',
  
  'h',
  'i',
 
  'j',
  'k',
 
  'l',
  
  'm',
  
  'n',
  
  'o',
  
  'p',
  'r',
  's',
  't',
  
  'u',
  
  'w',
  
  'x',
  
  'y',
  'z',
  "'",
  
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
