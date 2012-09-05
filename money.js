remoteStorage.defineModule('money', function(myPrivateBaseClient, myPublicBaseClient) {
  return {
    name: 'money',
    dataHints: {
    },
    exports: {
      setDayBusiness: function(tab, year, month, day, transactions, endBalances) {
        var datePath = year+'/'+month+'/'+day+'/'+tab.substring(1)+'/';
        for(var i=0; i<transactions.length;i++) {
          myPrivateBaseClient.storeObject('transaction', datePath+'transaction/'+i, transactions[i]);
        }
        for(var i in endBalances) {
          myPrivateBaseClient.storeObject('balance', datePath+'balance/'+i, endBalances[i]);
        }
      },
      getTransactions: function(tab) {
        if(tab=='#unhosted') {
          return [{
            from: 'michiel',
            to: 'pot',
            comment: 'received 4042 euros from paypal to his personal bank account (comdirect)',
            amount: 4042,
            currency: 'EUR',
            date: '20111031'
          }];
        } else {
          return [];
        }
      },
      getParticipants: function(tab) {
        return ['michiel', 'javi', 'jan', 'hugo', 'martin', 'e.V.', 'nlnet', 'unhosted-reserved', 'berlinerbank', 'other', 'pot'];
      }
    }
  };
});
