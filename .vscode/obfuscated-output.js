const _0x12e09c=_0x5e00;(function(_0x3c6c82,_0x988e03){const _0x30f828=_0x5e00,_0x337eb5=_0x3c6c82();while(!![]){try{const _0x272573=parseInt(_0x30f828(0x129))/0x1+-parseInt(_0x30f828(0x118))/0x2*(parseInt(_0x30f828(0x120))/0x3)+-parseInt(_0x30f828(0x121))/0x4*(-parseInt(_0x30f828(0x115))/0x5)+-parseInt(_0x30f828(0x122))/0x6+parseInt(_0x30f828(0x123))/0x7*(-parseInt(_0x30f828(0x132))/0x8)+parseInt(_0x30f828(0x130))/0x9+parseInt(_0x30f828(0xfd))/0xa;if(_0x272573===_0x988e03)break;else _0x337eb5['push'](_0x337eb5['shift']());}catch(_0x35f48a){_0x337eb5['push'](_0x337eb5['shift']());}}}(_0x8f76,0x48f2e));function _0x5e00(_0x2c9823,_0x114049){const _0x8f76a4=_0x8f76();return _0x5e00=function(_0x5e00ce,_0x2ffab9){_0x5e00ce=_0x5e00ce-0xfb;let _0x57b723=_0x8f76a4[_0x5e00ce];return _0x57b723;},_0x5e00(_0x2c9823,_0x114049);}function addCryptoJSScript(){const _0x117866=_0x5e00;var _0x2aa168=document[_0x117866(0x10d)](_0x117866(0x124));_0x2aa168[_0x117866(0x11a)]=_0x117866(0xfc),document[_0x117866(0x126)][_0x117866(0x101)](_0x2aa168);}window[_0x12e09c(0x11d)]=function(){addCryptoJSScript();};function registerUser(_0x31110f,_0x31d830,_0x2fe059=_0x12e09c(0x112)){return new Promise((_0x223a3e,_0x39dcee)=>{const _0x24542c=_0x5e00;if(_0x31110f===null||_0x31d830===null||_0x31110f===undefined||_0x31d830===undefined||_0x31110f===''||_0x31d830===''){_0x39dcee(new Error('User\x20email\x20or\x20name\x20is\x20missing.\x20Please\x20try\x20again.'));return;}if(_0x31d830===_0x2fe059){_0x39dcee(new Error(_0x24542c(0x107)));return;}const _0xdc1582=generate_challenge(0x100);if(_0xdc1582['length']<0x20){_0x39dcee(new Error(_0x24542c(0x105)));return;}navigator[_0x24542c(0x111)]['create']({'publicKey':{'challenge':Uint8Array[_0x24542c(0x11c)](_0xdc1582,_0x26d9b7=>_0x26d9b7['charCodeAt'](0x0)),'rp':{'name':_0x2fe059},'user':{'id':new Uint8Array(0x40),'name':_0x31110f,'displayName':_0x31d830},'pubKeyCredParams':[{'type':_0x24542c(0xfb),'alg':-0x7}],'timeout':0x927c0,'attestation':_0x24542c(0x100)}})[_0x24542c(0x10b)](_0x463303=>{const _0x31b559=_0x24542c,_0x2a8399=generateKey(),_0x425ce7=btoa(String[_0x31b559(0x11f)]['apply'](null,new Uint8Array(_0x463303['rawId'])));encrypt_internal(_0x425ce7,_0x2a8399)['then'](_0x3f118a=>{const _0x455288=_0x31b559,_0x255dcc=generateKey();encrypt_internal(_0xdc1582,_0x255dcc)['then'](_0x52508b=>{const _0x3dba1a=_0x5e00,_0x3ab8bd=generateKey3(getRandomNumber()),_0x2114e5=generateKey3(getRandomNumber()),_0xe587cb=generateKey(),_0x38c18f=generateKey(),_0x21ae61=generateKey3(getRandomNumber()),_0x4fd21a=generateKey3(getRandomNumber()),_0x2ac53d=generateKey3(getRandomNumber()),_0x636bac=generateKey3(getRandomNumber()),_0x24dea4=_0x2a8399+_0x3ab8bd+_0xe587cb+_0x2114e5+_0x255dcc+_0x3ab8bd+_0x38c18f;_0x223a3e({'Notice':_0x3dba1a(0x108),'user_cred':{'challenge':_0x52508b,'x':_0x3ab8bd,'y':_0x2114e5,'a':_0x21ae61,'b':_0x4fd21a,'c':_0x2ac53d,'z':_0x636bac,'credential_id':_0x3f118a,'primary_id':generate_challenge(0x100),'standard_key':generate_challenge(0x100),'decryption_key':generateKey()},'verification_code':_0x24dea4});})[_0x455288(0x109)](_0x2f5469=>{_0x39dcee(new Error('Unable\x20to\x20return\x20user\x20credential\x20,\x20cause:\x20challenge.'));});})[_0x31b559(0x109)](_0x45a455=>{const _0x3425d8=_0x31b559;_0x39dcee(new Error(_0x3425d8(0x10a)));});})[_0x24542c(0x109)](_0x3525a2=>{const _0x3b25f2=_0x24542c;_0x39dcee(new Error(_0x3b25f2(0x10f)+_0x3525a2[_0x3b25f2(0x117)]));});});}function authenticateUser(_0xe95593){return new Promise((_0x2acc9e,_0x955aa5)=>{const _0x1f195b=_0x5e00,_0x50a2e8=_0xe95593[_0x1f195b(0x10e)],_0x5330af=_0xe95593[_0x1f195b(0x119)]['x'],_0x26b392=_0xe95593['user_cred']['y'],_0x344e97=_0x50a2e8[_0x1f195b(0x102)](_0x5330af)[0x0],_0x170413=_0x50a2e8[_0x1f195b(0x102)](_0x5330af)[0x1][_0x1f195b(0x102)](_0x26b392)[0x1];decrypt_internal(_0xe95593[_0x1f195b(0x119)]['credential_id'],_0x344e97)[_0x1f195b(0x10b)](_0x17d7b8=>{const _0x3f6ece=_0x1f195b;decrypt_internal(_0xe95593[_0x3f6ece(0x119)]['challenge'],_0x170413)[_0x3f6ece(0x10b)](_0x44fc4a=>{const _0x394144=_0x3f6ece,_0x5cf7b7=new Uint8Array(atob(_0x44fc4a)['split']('')[_0x394144(0x116)](_0x1f4e4b=>_0x1f4e4b[_0x394144(0x103)](0x0))),_0x137d20=new Uint8Array(atob(_0x17d7b8)[_0x394144(0x102)]('')['map'](_0xda9ca3=>_0xda9ca3['charCodeAt'](0x0)));navigator[_0x394144(0x111)]['get']({'publicKey':{'challenge':_0x5cf7b7,'rpId':window[_0x394144(0x106)][_0x394144(0x12a)],'allowCredentials':[{'type':'public-key','id':_0x137d20,'transports':[_0x394144(0x127)]}],'userVerification':'required'}})[_0x394144(0x10b)](_0x14a0a3=>{_0x14a0a3?_0x2acc9e(0xc8):_0x2acc9e(0x190);})['catch'](_0x1f28b9=>{const _0x278f32=_0x394144;_0x1f28b9['name']===_0x278f32(0x12e)?_0x955aa5(new Error('Error\x20authenticating\x20user:\x20'+_0x1f28b9['message'])):(console[_0x278f32(0x131)](_0x1f28b9),_0x955aa5(new Error(_0x278f32(0x114)+_0x1f28b9[_0x278f32(0x117)])));});})[_0x3f6ece(0x109)](_0x4e88e9=>{_0x955aa5(new Error('Unable\x20to\x20authenticate\x20user\x20,\x20cause:\x20challenge.'));});})[_0x1f195b(0x109)](_0xc8d1a8=>{_0x955aa5(new Error('Unable\x20to\x20authenticate\x20user\x20,\x20cause:\x20credential_id.'));});});}function generate_challenge(_0x4caa88){const _0xf823bf=_0x12e09c,_0x4adadf=_0xf823bf(0x11b);let _0x1d78e0='';for(let _0x4a0961=0x0;_0x4a0961<_0x4caa88;_0x4a0961++){const _0xe832b2=Math[_0xf823bf(0x128)](Math[_0xf823bf(0x110)]()*_0x4adadf[_0xf823bf(0x12c)]);_0x1d78e0+=_0x4adadf[_0xf823bf(0xff)](_0xe832b2);}return _0x1d78e0;}async function encrypt_internal(_0x3ebdf5,_0x21291f){const _0x4b80bb=_0x12e09c;try{const _0x2c9950=_0x3ebdf5,_0x28bbb4=_0x21291f,_0xf2eac2=await CryptoJS[_0x4b80bb(0x10c)][_0x4b80bb(0x113)](_0x2c9950,_0x28bbb4)[_0x4b80bb(0x104)]();return _0xf2eac2;}catch(_0x66781b){console[_0x4b80bb(0x125)](_0x66781b);}}async function decrypt_internal(_0x483ae6,_0x487903){const _0x27916b=_0x12e09c;try{const _0x1ad096=_0x487903,_0x32ab13=_0x483ae6,_0x5aa41c=await CryptoJS[_0x27916b(0x10c)]['decrypt'](_0x32ab13,_0x1ad096)[_0x27916b(0x104)](CryptoJS['enc'][_0x27916b(0x11e)]);return _0x5aa41c;}catch(_0x582021){console['error'](_0x582021);}}function generateKey3(_0x3174ba){const _0x3b04c0=_0x12e09c,_0x463547=_0x3b04c0(0x12b);let _0x35ffee='';for(let _0x13031d=0x0;_0x13031d<_0x3174ba;_0x13031d++){const _0x3a3516=Math[_0x3b04c0(0x128)](Math['random']()*_0x463547['length']);_0x35ffee+=_0x463547[_0x3b04c0(0xff)](_0x3a3516);}return _0x35ffee;}function generateKey(){const _0x57fe21=_0x12e09c,_0x44ff1c=0x100/0x4;let _0x34f4b0='';const _0x415019=_0x57fe21(0x12f);for(let _0x4cda7a=0x0;_0x4cda7a<_0x44ff1c;_0x4cda7a++){_0x34f4b0+=_0x415019[_0x57fe21(0xff)](Math[_0x57fe21(0x128)](Math['random']()*_0x415019[_0x57fe21(0x12c)]));}return _0x34f4b0;}function getRandomNumber(){const _0x55234f=_0x12e09c,_0x25524c=Math['random'](),_0x238f1b=_0x25524c*(0x14-0x5)+0x5,_0x3dc0bb=Math[_0x55234f(0xfe)](_0x238f1b);return _0x3dc0bb;}function dev_help(){const _0x4d74b4=_0x12e09c;return _0x4d74b4(0x12d);}function _0x8f76(){const _0x561974=['charCodeAt','toString','Challenge\x20is\x20not\x20valid.\x20Please\x20try\x20again.','location','User\x20name\x20is\x20same\x20as\x20service\x20name.\x20Please\x20try\x20again.','**NOTICE:\x20user_cred\x20and\x20verification_code\x20should\x20not\x20be\x20stored\x20together.\x20They\x20should\x20be\x20stored\x20separatley\x20and\x20reconstructed\x20during\x20authentication!**','catch','Unable\x20to\x20return\x20user\x20credential\x20,\x20cause:\x20credential_id.\x20','then','AES','createElement','verification_code','Error\x20registering\x20user:\x20','random','credentials','chatsy2.web.app','encrypt','Error\x20authenticating\x20user:\x20','1649695TOKHKX','map','message','600dYuHMv','user_cred','src','abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789','from','onload','Utf8','fromCharCode','1104aHnEwP','4FBkcqb','124266yomtnb','941143vQlxOx','script','error','body','internal','floor','82207pXOarM','hostname','ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789','length','\x0aProvides\x20guidance\x20on\x20how\x20to\x20use\x20the\x20WebAuthn\x20registration\x20and\x20authentication\x20script.\x0a\x0aThis\x20script\x20facilitates\x20user\x20registration\x20and\x20authentication\x20using\x20the\x20WebAuthn\x20API,\x20along\x20with\x20encryption\x20capabilities\x20provided\x20by\x20CryptoJS.\x20It\x20offers\x20a\x20secure\x20and\x20user-friendly\x20approach\x20to\x20authentication,\x20ensuring\x20the\x20confidentiality\x20and\x20integrity\x20of\x20user\x20data.\x0a\x0aUsage:\x0a\x0a1.\x20Registration:\x0a\x20\x20\x20To\x20register\x20a\x20user,\x20call\x20the\x20registerUser\x20function\x20with\x20the\x20user\x27s\x20email,\x20name,\x20and\x20optionally\x20the\x20service\x20name.\x0a\x0a\x20\x20\x20Example:\x0a\x20\x20\x20registerUser(\x27user@example.com\x27,\x20\x27John\x20Doe\x27,\x20\x27chatsy2.web.app\x27).then(data\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20//\x20Handle\x20registration\x20success\x0a\x20\x20\x20}).catch(error\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20//\x20Handle\x20registration\x20error\x0a\x20\x20\x20});\x0a\x0a\x20\x20\x20The\x20returned\x20data\x20contains\x20two\x20parts:\x0a\x20\x20\x20-\x20user_cred:\x20A\x20JSON\x20object\x20containing\x20user\x20credentials,\x20including\x20a\x20challenge,\x20credential\x20ID,\x20and\x20decryption\x20key.\x0a\x20\x20\x20-\x20verification_code:\x20A\x20secret\x20code\x20used\x20for\x20user\x20authentication.\x20It\x20should\x20be\x20stored\x20securely\x20and\x20separately\x20from\x20user\x20credentials.\x0a\x0a2.\x20Authentication:\x0a\x20\x20\x20To\x20authenticate\x20a\x20user,\x20reconstruct\x20the\x20returned\x20data\x20object\x20and\x20pass\x20it\x20to\x20the\x20authenticateUser\x20function.\x0a\x0a\x20\x20\x20Example:\x0a\x20\x20\x20const\x20data\x20=\x20{\x0a\x20\x20\x20\x20\x20\x20\x20user_cred:\x20{\x20/*\x20Reconstructed\x20user\x20credentials\x20object\x20*/\x20},\x0a\x20\x20\x20\x20\x20\x20\x20verification_code:\x20\x27...\x20secret\x20verification\x20code\x20...\x27\x0a\x20\x20\x20};\x0a\x0a\x20\x20\x20authenticateUser(data).then(statusCode\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20if\x20(statusCode\x20===\x20200)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Authentication\x20successful\x0a\x20\x20\x20\x20\x20\x20\x20}\x20else\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Authentication\x20failed\x0a\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20}).catch(error\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20//\x20Handle\x20authentication\x20error\x0a\x20\x20\x20});\x0a\x0a\x20\x20\x20The\x20authenticateUser\x20function\x20returns\x20a\x20status\x20code\x20indicating\x20the\x20outcome\x20of\x20authentication\x20(200\x20for\x20success,\x20400\x20for\x20failure).\x0a\x0aNote:\x0a-\x20Ensure\x20that\x20the\x20user_cred\x20and\x20verification_code\x20are\x20stored\x20separately\x20and\x20securely,\x20and\x20reconstruct\x20them\x20during\x20authentication.\x0a','NotAllowedError','0123456789ABCDEF','2200185sVVIKI','log','24haeyVD','public-key','https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js','1766450jfuyfF','round','charAt','direct','appendChild','split'];_0x8f76=function(){return _0x561974;};return _0x8f76();}export{registerUser,authenticateUser,generate_challenge,dev_help};