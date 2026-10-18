import { PreTrainedModel } from '../modeling_utils.js';
import { Qwen3VLForConditionalGeneration } from '../qwen3_vl/modeling_qwen3_vl.js';

// Multimodal (qwen3_5) — mantém a cadeia VL existente.
export class Qwen3_5ForConditionalGeneration extends Qwen3VLForConditionalGeneration {}
export class Qwen3_5ForCausalLM extends Qwen3_5ForConditionalGeneration {}

// Text-only decoder híbrido (qwen3_5_text): atenção linear (conv+recurrent) + full-attention (KV).
// A lógica de cache é genérica (configs.js getCacheNames + modeling_utils.js), dirigida pelos
// nomes de I/O do ONNX — então a classe só precisa estender PreTrainedModel (padrão qwen3_next).
export class Qwen3_5TextPreTrainedModel extends PreTrainedModel {}
export class Qwen3_5TextModel extends Qwen3_5TextPreTrainedModel {}
export class Qwen3_5TextForCausalLM extends Qwen3_5TextPreTrainedModel {}
