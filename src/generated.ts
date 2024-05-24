//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Agent
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const agentAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: 'initialOracleAddress',
        internalType: 'address',
        type: 'address',
      },
      { name: 'systemPrompt', internalType: 'string', type: 'string' },
      { name: 'targetResult', internalType: 'string', type: 'string' },
      { name: 'mintLimit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: 'result', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'agentRuns',
    outputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'messagesCount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: 'result', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'result', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'runId', internalType: 'uint256', type: 'uint256' }],
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'claimedRunIds',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'agentId', internalType: 'uint256', type: 'uint256' }],
    name: 'getLatestMessageContent',
    outputs: [
      {
        name: '',
        internalType: 'struct IOracle.Content',
        type: 'tuple',
        components: [
          { name: 'contentType', internalType: 'string', type: 'string' },
          { name: 'value', internalType: 'string', type: 'string' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'agentId', internalType: 'uint256', type: 'uint256' }],
    name: 'getLatestRunOwner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'chatId', internalType: 'uint256', type: 'uint256' }],
    name: 'getMessageHistory',
    outputs: [
      {
        name: '',
        internalType: 'struct IOracle.Message[]',
        type: 'tuple[]',
        components: [
          { name: 'role', internalType: 'string', type: 'string' },
          {
            name: 'content',
            internalType: 'struct IOracle.Content[]',
            type: 'tuple[]',
            components: [
              { name: 'contentType', internalType: 'string', type: 'string' },
              { name: 'value', internalType: 'string', type: 'string' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'limit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: 'result', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'runId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'response',
        internalType: 'struct IOracle.OpenAiResponse',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'string', type: 'string' },
          { name: 'content', internalType: 'string', type: 'string' },
          { name: 'functionName', internalType: 'string', type: 'string' },
          { name: 'functionArguments', internalType: 'string', type: 'string' },
          { name: 'created', internalType: 'uint64', type: 'uint64' },
          { name: 'model', internalType: 'string', type: 'string' },
          { name: 'systemFingerprint', internalType: 'string', type: 'string' },
          { name: 'object', internalType: 'string', type: 'string' },
          { name: 'completionTokens', internalType: 'uint32', type: 'uint32' },
          { name: 'promptTokens', internalType: 'uint32', type: 'uint32' },
          { name: 'totalTokens', internalType: 'uint32', type: 'uint32' },
        ],
      },
      { name: 'errorMessage', internalType: 'string', type: 'string' },
    ],
    name: 'onOracleOpenAiLlmResponse',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'oracleAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'prompt',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'query', internalType: 'string', type: 'string' }],
    name: 'runAgent',
    outputs: [{ name: 'i', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newOracleAddress', internalType: 'address', type: 'address' },
    ],
    name: 'setOracleAddress',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'target',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: 'result', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    name: 'usedQueries',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'runId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'query', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'AgentRunCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newOracleAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OracleAddressUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'runId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'claimEvent',
  },
  { type: 'error', inputs: [], name: 'AllowanceOverflow' },
  { type: 'error', inputs: [], name: 'AllowanceUnderflow' },
  { type: 'error', inputs: [], name: 'InsufficientAllowance' },
  { type: 'error', inputs: [], name: 'InsufficientBalance' },
  { type: 'error', inputs: [], name: 'InvalidPermit' },
  { type: 'error', inputs: [], name: 'PermitExpired' },
  { type: 'error', inputs: [], name: 'TotalSupplyOverflow' },
] as const

/**
 *
 */
export const agentAddress = {
  31337: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
  696969: '0x37CC59105D764aadf3b7a9C4aAA67062dF6cB666',
} as const

/**
 *
 */
export const agentConfig = { address: agentAddress, abi: agentAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ChatOracle
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const chatOracleAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [{ name: 'attestation', internalType: 'string', type: 'string' }],
    name: 'addAttestation',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'functionId', internalType: 'uint256', type: 'uint256' },
      { name: 'functionCallBackId', internalType: 'uint256', type: 'uint256' },
      { name: 'response', internalType: 'string', type: 'string' },
      { name: 'errorMessage', internalType: 'string', type: 'string' },
    ],
    name: 'addFunctionResponse',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'promptId', internalType: 'uint256', type: 'uint256' },
      { name: 'promptCallBackId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'response',
        internalType: 'struct IOracle.GroqResponse',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'string', type: 'string' },
          { name: 'content', internalType: 'string', type: 'string' },
          { name: 'created', internalType: 'uint64', type: 'uint64' },
          { name: 'model', internalType: 'string', type: 'string' },
          { name: 'systemFingerprint', internalType: 'string', type: 'string' },
          { name: 'object', internalType: 'string', type: 'string' },
          { name: 'completionTokens', internalType: 'uint32', type: 'uint32' },
          { name: 'promptTokens', internalType: 'uint32', type: 'uint32' },
          { name: 'totalTokens', internalType: 'uint32', type: 'uint32' },
        ],
      },
      { name: 'errorMessage', internalType: 'string', type: 'string' },
    ],
    name: 'addGroqResponse',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'cid', internalType: 'string', type: 'string' }],
    name: 'addKnowledgeBase',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'kbIndexingRequestId', internalType: 'uint256', type: 'uint256' },
      { name: 'indexCid', internalType: 'string', type: 'string' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'addKnowledgeBaseIndex',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'kbQueryId', internalType: 'uint256', type: 'uint256' },
      { name: 'kbQueryCallbackId', internalType: 'uint256', type: 'uint256' },
      { name: 'documents', internalType: 'string[]', type: 'string[]' },
      { name: 'errorMessage', internalType: 'string', type: 'string' },
    ],
    name: 'addKnowledgeBaseQueryResponse',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'promptId', internalType: 'uint256', type: 'uint256' },
      { name: 'promptCallBackId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'response',
        internalType: 'struct IOracle.OpenAiResponse',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'string', type: 'string' },
          { name: 'content', internalType: 'string', type: 'string' },
          { name: 'functionName', internalType: 'string', type: 'string' },
          { name: 'functionArguments', internalType: 'string', type: 'string' },
          { name: 'created', internalType: 'uint64', type: 'uint64' },
          { name: 'model', internalType: 'string', type: 'string' },
          { name: 'systemFingerprint', internalType: 'string', type: 'string' },
          { name: 'object', internalType: 'string', type: 'string' },
          { name: 'completionTokens', internalType: 'uint32', type: 'uint32' },
          { name: 'promptTokens', internalType: 'uint32', type: 'uint32' },
          { name: 'totalTokens', internalType: 'uint32', type: 'uint32' },
        ],
      },
      { name: 'errorMessage', internalType: 'string', type: 'string' },
    ],
    name: 'addOpenAiResponse',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'pcr0Hash', internalType: 'string', type: 'string' }],
    name: 'addPcr0Hash',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'promptId', internalType: 'uint256', type: 'uint256' },
      { name: 'promptCallBackId', internalType: 'uint256', type: 'uint256' },
      { name: 'response', internalType: 'string', type: 'string' },
      { name: 'errorMessage', internalType: 'string', type: 'string' },
    ],
    name: 'addResponse',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'attestations',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'callbackAddresses',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'functionCallbackId', internalType: 'uint256', type: 'uint256' },
      { name: 'functionType', internalType: 'string', type: 'string' },
      { name: 'functionInput', internalType: 'string', type: 'string' },
    ],
    name: 'createFunctionCall',
    outputs: [{ name: 'i', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'promptCallbackId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'config',
        internalType: 'struct IOracle.GroqRequest',
        type: 'tuple',
        components: [
          { name: 'model', internalType: 'string', type: 'string' },
          { name: 'frequencyPenalty', internalType: 'int8', type: 'int8' },
          { name: 'logitBias', internalType: 'string', type: 'string' },
          { name: 'maxTokens', internalType: 'uint32', type: 'uint32' },
          { name: 'presencePenalty', internalType: 'int8', type: 'int8' },
          { name: 'responseFormat', internalType: 'string', type: 'string' },
          { name: 'seed', internalType: 'uint256', type: 'uint256' },
          { name: 'stop', internalType: 'string', type: 'string' },
          { name: 'temperature', internalType: 'uint256', type: 'uint256' },
          { name: 'topP', internalType: 'uint256', type: 'uint256' },
          { name: 'user', internalType: 'string', type: 'string' },
        ],
      },
    ],
    name: 'createGroqLlmCall',
    outputs: [{ name: 'i', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'kbQueryCallbackId', internalType: 'uint256', type: 'uint256' },
      { name: 'cid', internalType: 'string', type: 'string' },
      { name: 'query', internalType: 'string', type: 'string' },
      { name: 'num_documents', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'createKnowledgeBaseQuery',
    outputs: [{ name: 'i', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'promptCallbackId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createLlmCall',
    outputs: [{ name: 'i', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'promptCallbackId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'config',
        internalType: 'struct IOracle.OpenAiRequest',
        type: 'tuple',
        components: [
          { name: 'model', internalType: 'string', type: 'string' },
          { name: 'frequencyPenalty', internalType: 'int8', type: 'int8' },
          { name: 'logitBias', internalType: 'string', type: 'string' },
          { name: 'maxTokens', internalType: 'uint32', type: 'uint32' },
          { name: 'presencePenalty', internalType: 'int8', type: 'int8' },
          { name: 'responseFormat', internalType: 'string', type: 'string' },
          { name: 'seed', internalType: 'uint256', type: 'uint256' },
          { name: 'stop', internalType: 'string', type: 'string' },
          { name: 'temperature', internalType: 'uint256', type: 'uint256' },
          { name: 'topP', internalType: 'uint256', type: 'uint256' },
          { name: 'tools', internalType: 'string', type: 'string' },
          { name: 'toolChoice', internalType: 'string', type: 'string' },
          { name: 'user', internalType: 'string', type: 'string' },
        ],
      },
    ],
    name: 'createOpenAiLlmCall',
    outputs: [{ name: 'i', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'functionCallbackAddresses',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'functionCallbackIds',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'functionInputs',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'functionTypes',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'functionsCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'promptId', internalType: 'uint256', type: 'uint256' },
      { name: 'promptCallBackId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getMessages',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'promptId', internalType: 'uint256', type: 'uint256' },
      { name: 'promptCallBackId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getMessagesAndRoles',
    outputs: [
      {
        name: '',
        internalType: 'struct IOracle.Message[]',
        type: 'tuple[]',
        components: [
          { name: 'role', internalType: 'string', type: 'string' },
          {
            name: 'content',
            internalType: 'struct IOracle.Content[]',
            type: 'tuple[]',
            components: [
              { name: 'contentType', internalType: 'string', type: 'string' },
              { name: 'value', internalType: 'string', type: 'string' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'promptId', internalType: 'uint256', type: 'uint256' },
      { name: 'promptCallBackId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getRoles',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'groqConfigurations',
    outputs: [
      { name: 'model', internalType: 'string', type: 'string' },
      { name: 'frequencyPenalty', internalType: 'int8', type: 'int8' },
      { name: 'logitBias', internalType: 'string', type: 'string' },
      { name: 'maxTokens', internalType: 'uint32', type: 'uint32' },
      { name: 'presencePenalty', internalType: 'int8', type: 'int8' },
      { name: 'responseFormat', internalType: 'string', type: 'string' },
      { name: 'seed', internalType: 'uint256', type: 'uint256' },
      { name: 'stop', internalType: 'string', type: 'string' },
      { name: 'temperature', internalType: 'uint256', type: 'uint256' },
      { name: 'topP', internalType: 'uint256', type: 'uint256' },
      { name: 'user', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'isFunctionProcessed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'isKbIndexingRequestProcessed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'isKbQueryProcessed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'isPromptProcessed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'string', type: 'string' }],
    name: 'kbIndexes',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'kbIndexingRequestCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'kbIndexingRequestErrors',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'kbIndexingRequests',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'kbQueries',
    outputs: [
      { name: 'cid', internalType: 'string', type: 'string' },
      { name: 'query', internalType: 'string', type: 'string' },
      { name: 'num_documents', internalType: 'uint32', type: 'uint32' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'kbQueryCallbackAddresses',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'kbQueryCallbackIds',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'kbQueryCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'latestAttestationOwner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'latestPcr0HashOwner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'functionId', internalType: 'uint256', type: 'uint256' }],
    name: 'markFunctionAsProcessed',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'promptId', internalType: 'uint256', type: 'uint256' }],
    name: 'markGroqPromptAsProcessed',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'kbIndexingRequestId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'markKnowledgeBaseAsProcessed',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'kbQueryId', internalType: 'uint256', type: 'uint256' }],
    name: 'markKnowledgeBaseQueryAsProcessed',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'promptId', internalType: 'uint256', type: 'uint256' }],
    name: 'markOpenAiPromptAsProcessed',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'promptId', internalType: 'uint256', type: 'uint256' }],
    name: 'markPromptAsProcessed',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'openAiConfigurations',
    outputs: [
      { name: 'model', internalType: 'string', type: 'string' },
      { name: 'frequencyPenalty', internalType: 'int8', type: 'int8' },
      { name: 'logitBias', internalType: 'string', type: 'string' },
      { name: 'maxTokens', internalType: 'uint32', type: 'uint32' },
      { name: 'presencePenalty', internalType: 'int8', type: 'int8' },
      { name: 'responseFormat', internalType: 'string', type: 'string' },
      { name: 'seed', internalType: 'uint256', type: 'uint256' },
      { name: 'stop', internalType: 'string', type: 'string' },
      { name: 'temperature', internalType: 'uint256', type: 'uint256' },
      { name: 'topP', internalType: 'uint256', type: 'uint256' },
      { name: 'tools', internalType: 'string', type: 'string' },
      { name: 'toolChoice', internalType: 'string', type: 'string' },
      { name: 'user', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'pcr0Hashes',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'promptCallbackIds',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'promptType',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'promptTypes',
    outputs: [
      { name: 'defaultType', internalType: 'string', type: 'string' },
      { name: 'openAi', internalType: 'string', type: 'string' },
      { name: 'groq', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'promptsCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_addressToWhitelist', internalType: 'address', type: 'address' },
      { name: 'isWhitelisted', internalType: 'bool', type: 'bool' },
    ],
    name: 'updateWhitelist',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'functionId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'functionInput',
        internalType: 'string',
        type: 'string',
        indexed: true,
      },
      {
        name: 'functionCallbackId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'FunctionAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'KnowledgeBaseIndexRequestAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'cid', internalType: 'string', type: 'string', indexed: true },
      {
        name: 'indexCid',
        internalType: 'string',
        type: 'string',
        indexed: true,
      },
    ],
    name: 'KnowledgeBaseIndexed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'promptId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'promptCallbackId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'PromptAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'kbQueryId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'knowledgeBaseQueryAdded',
  },
] as const

/**
 *
 */
export const chatOracleAddress = {
  31337: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
  696969: '0x2A54624dBD1bdCB6e3a6d37991F9Fbce26EF9850',
} as const

/**
 *
 */
export const chatOracleConfig = {
  address: chatOracleAddress,
  abi: chatOracleAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: 'result', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: 'result', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'result', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: 'result', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: 'result', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  { type: 'error', inputs: [], name: 'AllowanceOverflow' },
  { type: 'error', inputs: [], name: 'AllowanceUnderflow' },
  { type: 'error', inputs: [], name: 'InsufficientAllowance' },
  { type: 'error', inputs: [], name: 'InsufficientBalance' },
  { type: 'error', inputs: [], name: 'InvalidPermit' },
  { type: 'error', inputs: [], name: 'PermitExpired' },
  { type: 'error', inputs: [], name: 'TotalSupplyOverflow' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IChatGpt
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iChatGptAbi = [
  {
    type: 'function',
    inputs: [{ name: 'callbackId', internalType: 'uint256', type: 'uint256' }],
    name: 'getMessageHistory',
    outputs: [
      {
        name: '',
        internalType: 'struct IOracle.Message[]',
        type: 'tuple[]',
        components: [
          { name: 'role', internalType: 'string', type: 'string' },
          {
            name: 'content',
            internalType: 'struct IOracle.Content[]',
            type: 'tuple[]',
            components: [
              { name: 'contentType', internalType: 'string', type: 'string' },
              { name: 'value', internalType: 'string', type: 'string' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'callbackId', internalType: 'uint256', type: 'uint256' }],
    name: 'getMessageHistoryContents',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'callbackId', internalType: 'uint256', type: 'uint256' }],
    name: 'getMessageHistoryRoles',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callbackId', internalType: 'uint256', type: 'uint256' },
      { name: 'response', internalType: 'string', type: 'string' },
      { name: 'errorMessage', internalType: 'string', type: 'string' },
    ],
    name: 'onOracleFunctionResponse',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callbackId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'response',
        internalType: 'struct IOracle.GroqResponse',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'string', type: 'string' },
          { name: 'content', internalType: 'string', type: 'string' },
          { name: 'created', internalType: 'uint64', type: 'uint64' },
          { name: 'model', internalType: 'string', type: 'string' },
          { name: 'systemFingerprint', internalType: 'string', type: 'string' },
          { name: 'object', internalType: 'string', type: 'string' },
          { name: 'completionTokens', internalType: 'uint32', type: 'uint32' },
          { name: 'promptTokens', internalType: 'uint32', type: 'uint32' },
          { name: 'totalTokens', internalType: 'uint32', type: 'uint32' },
        ],
      },
      { name: 'errorMessage', internalType: 'string', type: 'string' },
    ],
    name: 'onOracleGroqLlmResponse',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callbackId', internalType: 'uint256', type: 'uint256' },
      { name: 'documents', internalType: 'string[]', type: 'string[]' },
      { name: 'errorMessage', internalType: 'string', type: 'string' },
    ],
    name: 'onOracleKnowledgeBaseQueryResponse',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callbackId', internalType: 'uint256', type: 'uint256' },
      { name: 'response', internalType: 'string', type: 'string' },
      { name: 'errorMessage', internalType: 'string', type: 'string' },
    ],
    name: 'onOracleLlmResponse',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callbackId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'response',
        internalType: 'struct IOracle.OpenAiResponse',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'string', type: 'string' },
          { name: 'content', internalType: 'string', type: 'string' },
          { name: 'functionName', internalType: 'string', type: 'string' },
          { name: 'functionArguments', internalType: 'string', type: 'string' },
          { name: 'created', internalType: 'uint64', type: 'uint64' },
          { name: 'model', internalType: 'string', type: 'string' },
          { name: 'systemFingerprint', internalType: 'string', type: 'string' },
          { name: 'object', internalType: 'string', type: 'string' },
          { name: 'completionTokens', internalType: 'uint32', type: 'uint32' },
          { name: 'promptTokens', internalType: 'uint32', type: 'uint32' },
          { name: 'totalTokens', internalType: 'uint32', type: 'uint32' },
        ],
      },
      { name: 'errorMessage', internalType: 'string', type: 'string' },
    ],
    name: 'onOracleOpenAiLlmResponse',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721TokenReceiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721TokenReceiverAbi = [
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMulticall3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMulticall3Abi = [
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'returnData', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3Value[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3Value',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'blockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBasefee',
    outputs: [{ name: 'basefee', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'getBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getChainId',
    outputs: [{ name: 'chainid', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockCoinbase',
    outputs: [{ name: 'coinbase', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockDifficulty',
    outputs: [{ name: 'difficulty', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockGasLimit',
    outputs: [{ name: 'gaslimit', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'getEthBalance',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLastBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryAggregate',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryBlockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IOracle
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iOracleAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'functionCallbackId', internalType: 'uint256', type: 'uint256' },
      { name: 'functionType', internalType: 'string', type: 'string' },
      { name: 'functionInput', internalType: 'string', type: 'string' },
    ],
    name: 'createFunctionCall',
    outputs: [{ name: 'i', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'promptId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'request',
        internalType: 'struct IOracle.GroqRequest',
        type: 'tuple',
        components: [
          { name: 'model', internalType: 'string', type: 'string' },
          { name: 'frequencyPenalty', internalType: 'int8', type: 'int8' },
          { name: 'logitBias', internalType: 'string', type: 'string' },
          { name: 'maxTokens', internalType: 'uint32', type: 'uint32' },
          { name: 'presencePenalty', internalType: 'int8', type: 'int8' },
          { name: 'responseFormat', internalType: 'string', type: 'string' },
          { name: 'seed', internalType: 'uint256', type: 'uint256' },
          { name: 'stop', internalType: 'string', type: 'string' },
          { name: 'temperature', internalType: 'uint256', type: 'uint256' },
          { name: 'topP', internalType: 'uint256', type: 'uint256' },
          { name: 'user', internalType: 'string', type: 'string' },
        ],
      },
    ],
    name: 'createGroqLlmCall',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'kbQueryCallbackId', internalType: 'uint256', type: 'uint256' },
      { name: 'cid', internalType: 'string', type: 'string' },
      { name: 'query', internalType: 'string', type: 'string' },
      { name: 'num_documents', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'createKnowledgeBaseQuery',
    outputs: [{ name: 'i', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'promptId', internalType: 'uint256', type: 'uint256' }],
    name: 'createLlmCall',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'promptId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'request',
        internalType: 'struct IOracle.OpenAiRequest',
        type: 'tuple',
        components: [
          { name: 'model', internalType: 'string', type: 'string' },
          { name: 'frequencyPenalty', internalType: 'int8', type: 'int8' },
          { name: 'logitBias', internalType: 'string', type: 'string' },
          { name: 'maxTokens', internalType: 'uint32', type: 'uint32' },
          { name: 'presencePenalty', internalType: 'int8', type: 'int8' },
          { name: 'responseFormat', internalType: 'string', type: 'string' },
          { name: 'seed', internalType: 'uint256', type: 'uint256' },
          { name: 'stop', internalType: 'string', type: 'string' },
          { name: 'temperature', internalType: 'uint256', type: 'uint256' },
          { name: 'topP', internalType: 'uint256', type: 'uint256' },
          { name: 'tools', internalType: 'string', type: 'string' },
          { name: 'toolChoice', internalType: 'string', type: 'string' },
          { name: 'user', internalType: 'string', type: 'string' },
        ],
      },
    ],
    name: 'createOpenAiLlmCall',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mockErc20Abi = [
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_symbol', internalType: 'string', type: 'string' },
      { name: '_decimals', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mockErc721Abi = [
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_symbol', internalType: 'string', type: 'string' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
] as const
