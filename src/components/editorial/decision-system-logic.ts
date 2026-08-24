export type DecisionItem = {
  label: string;
  text: string;
};

export function getDecisionInitials(name: string) {
  const compactName = name.replace(/\.(io|ai)$/i, '');
  const words = compactName.split(/[\s-]+/).filter(Boolean);

  return (
    words.length > 1
      ? words.map((word) => word[0]).join('')
      : compactName.slice(0, 2)
  ).toUpperCase();
}

const costFactorRules: [string, RegExp][] = [
  ['Seats', /\b(?:seat|user)s?\b/i],
  [
    'Usage',
    /\b(?:usage|conversation|contact|subscriber|ticket|device|record|report|automation|chat)s?\b(?=.{0,56}\b(?:limits?|allowances?|included|tier|charge|cost|price|top-up|overage|extra)\b)/i,
  ],
  [
    'Calls',
    /\b(?:call(?:ing)?|minute)s?\b(?=.{0,56}\b(?:allowance|included|usage|charge|rate|fee|overage|billing|plan)\b)|\b(?:outbound|inbound)\s+minutes?\b|\b(?:costs?|charges?|fees?).{0,56}\b(?:call(?:ing)?|minutes?)\b/i,
  ],
  [
    'Numbers',
    /\b(?:virtual |phone )?numbers?\b(?=.{0,56}\b(?:charge|cost|price|fee|included|allowance|usage|billing)\b)|\b(?:costs?|charges?|fees?).{0,56}\b(?:virtual |phone )?numbers?\b/i,
  ],
  [
    'Messages',
    /\b(?:sms|mms|messages?)\b(?=.{0,56}\b(?:charge|cost|price|fee|included|allowance|usage|overage|billing|economics)\b)|\b(?:outbound|inbound)\s+(?:sms|mms)\b|\b(?:costs?|charges?|fees?).{0,56}\b(?:sms|mms|messages?)\b/i,
  ],
  [
    'AI usage',
    /\bai\s+(?:chat|agent|usage|credit)s?\b(?=.{0,56}\b(?:allowance|limit|included|charge|cost|price|overage|extra|billing)\b)|\bai\b(?=.{0,40}\b(?:credit|allowance|usage|overage|charge|cost)\b)/i,
  ],
  [
    'Credits',
    /\b(?:credit|wallet)s?\b(?=.{0,56}\b(?:usage|charge|cost|price|allowance|top-up|overage|extra|billing)\b)|\bwallet\s+credit\b|\b(?:costs?|charges?|fees?).{0,56}\bcredits?\b/i,
  ],
  [
    'Overages',
    /\b(?:overage|extra usage|top-up)s?\b|\bextra\s+(?:standard |ai )?chats?\b/i,
  ],
  ['Add-ons', /\b(?:add-on|addon|module)s?\b/i],
  [
    'Billing cycle',
    /\b(?:billed annually|annual[- ]billing|monthly billing|billing cycle|monthly or annual|yearly-selected)\b/i,
  ],
  [
    'Custom scope',
    /\b(?:custom pricing|custom quote|custom configuration|custom limits|custom scope|enterprise:?\s+custom|quote|contract)\b/i,
  ],
];

export function deriveTrueCostFactors(text: string) {
  return costFactorRules
    .filter(([, pattern]) => pattern.test(text))
    .map(([label]) => label);
}
