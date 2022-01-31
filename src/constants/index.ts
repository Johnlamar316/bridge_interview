//i used this object for the purpose of flexibility to all my components
export const SELECTIONS = [
    {
        name: 'identifyRequirements',
        estimate: 6,
        label: 'Identify Requirements'
    },
    { name: 'quotation', estimate: 3, label: 'Request a quotation' },
    { name: 'findProducts', estimate: 16, label: 'Find products' },
    { name: 'raiseOrder', estimate: 6, label: 'Raise an order' },
    { name: 'authoriseSale', estimate: 21.55, label: 'Authorise sale' },
    { name: 'payProvider', estimate: 13, label: 'Pay provider' },
    { name: 'deliverProduct', estimate: 4.3, label: 'Deliver product' },
    { name: 'invoiceCheck', estimate: 6, label: 'Invoice check' },
    { name: 'placeOrder', estimate: 6.5, label: 'Place order' }
];

//i used it to calculate my totals
export const SELECTIONS_OBJECT = SELECTIONS.reduce<Record<any, any>>(
    (acc, curr) => {
        acc[curr.name] = curr;
        console.log();
        return acc;
    },
    {}
);
