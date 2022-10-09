import chinese from 's2t-chinese'
import type { CustomStr } from 's2t-chinese'
const t2sCustomStr: CustomStr = [{ src: '超級戰士', des: '斯巴达战士' }]
export function t2s(str: string): string {
  return chinese.t2s(str, t2sCustomStr)
}
