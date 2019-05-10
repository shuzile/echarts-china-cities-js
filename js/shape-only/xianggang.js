(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('香港', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"香港"},"geometry":{"type":"MultiPolygon","coordinates":[["@@ABAF@LFHPFJJPFDF@F@DCFIFSJQTQBaASPEBO@IEQW@CAIIGQCQ@GE@G@ICCGAAABCBA@GBGCA@ADOAGO@KBMLC@ACAEFARSDEACSGCEACLIL@DEPCBACEAECCE@AACEIECCKCMGI@KJGJEJ@FDLIBSGUAOOSEAABE@ECG_CSBUPAHGBICEOUMGCKBC@GCGGMCABDRGDAF@HBFEHAP@JJJH@BNRFDDBHEBICAH@DPHF@DAFFFNLBRFBHNNBD@HEJJVED@DBDZD@DEPFBAFCBAI[@CFGF@~d~bNJFL@D@FEHGFgFgPS@E@MEGEEGCAO@E@SLUNCH@DDH@H@JEHAJCHQFAB\\`ZHVHNRJPHJLHXHFBP^ZVBRB@\\CJIDEH@DDAJHDFF@DGL@FFB^CRED@JFDPJHPBHED@HFFFBFMJBDNDFHFBHEDALDFAFD@KFAFDBFH@FHDBF@DFHAHDLABAFBBDFF@BAAA@@D@DD@@HH@LLDCJFFCJ@BABEFABBJAB@DADDH@BBB@FBDCPBFEJBFC@AFADC@IDAQCKMECAKD@D@FDD@FFDABAFBBHJBPZBDJ@BCD@BBHA@DB@D@HAAAEED@@BDBBAAAC@@A@EF@DGF@BC@CGE@GFBLABBADBBDAH@D@@AEIBAFF@ADBDAGGAEA@EIBCLBBA@CDBBCHBBABCTKLFZHRJH@DA@EACUMIMGGGCE@@CACIEMCMISGG@CESIGKGEQGG@CBABALQTCDABC@GCK@EBCACAAKBAHABAB@HA@AE@@ENADBDLFBFABACGEEICG@ICQB@B@JGBAAEEAODERKPGJAVDFD@HDBJBPA^DLCFBBBBJFJNLH@DHN@NXJFFHPHDABABKDAFDDABGAEBCDBFFALDDBFDBDADIBIFOCCICAAAI@CDG@KJ@HEBBDJCBALDBFBBBDB@HBHHALEDE@IEG@EFIJBFCF@JDF@DDBEDBDEHACGDK@EFEFK@EGAI@CDILEBEAIG@C@EECCKBCJEFGFAJGAGDKEGDG@GCCC@CBCFC@AIGAACFEEACC@CEAGB@EC@@AID@KBC@CACCGE@ABALGLBFA@GGEAE@GJAFBFIFCJHN@JOFGFG@@DBFCEC@@DDDB@B@@@ABCFKAAEDCACI@GBGAAFI@GJEBE@ECAEBICCCU@KJI@IGKIBAAHcDEFENAFADE@CDGDET@BCBEJGBA@@@A@BBIAIKEEEGAACBCF@DA@MHI@CACCAE@AGE@OLEHGBAA@CECCGEAEBITGDANHRGLCDG@QSEG@AAGBEJKRO@ACCBEAIAEGEACJM@IBAFBBA@CE@AAE@AAFIBQBADAFECCBEA@GFCAYBABIRC@QEGEACBEHMACECQACFE`A@GCK@AFFHADMJBBF@BB@FBHCFI@KLEBCAGWAAQDGCGJQHOPOHS`KL"],["@@ABD@@AA@"],["@@AAEAAB@DDBFC"],["@@ACCBFB"],["@@@ACCCB@CC@CFBDJAD@"],["@@BA@AG@@B@BF@"],["@@DABAGCADADBBDA"],["@@BAEBD@"],["@@BAFADAAC@AACDACGEBBHAFGFBDD@"],["@@B@B@@CA@AD"],["@@BAB@CCA@ABDD"],["@@D@CGABAFD@"],["@@@ACICABJFD"],["@@DA@ACCC@ADBFBBBC"],["@@@AABB@"],["@@BACGGBA@@HIEK@EA@BDH@BBBD@BBBAB@MN@DH@@BEFBDFBDA@CVABBDAJ@B@D@D@@CC@ECGB@ACACCA@IFEBAC@CFABEHGF@"],["@@DC@CEDAFB@BA"],["@@@AC@DB"],["@@@A@CEDBBD@"],["@@@AABB@"],["@@@JFBDA@CIE"],["@@DCD@BNDBDIAE@I@EE@ABABOHAJDDFABC"],["@@B@B@ECAFB@BA"],["@@AA@BB@"],["@@BCAB@B"],["@@BCDBDABBBBBABCB@ABDBBDB@DH@JABBDNEBE@CD@FCKKG@AEC@EBA@ACIEA@EDBB@DB@ED@F"],["@@D@BCG@ADBBBA"],["@@HGNA@ACGC@G@OFADCL@FDDJDBA@M"],["@@CIEAEJBBBDBBBBHAFBEG"],["@@@CFABAAGCC@ECCEACB@HAJAB@FEDJJDBHABA@CAC"],["@@BAEBBBBA"],["@@AEA@ABB@@FB@BA"],["@@@CABBB"],["@@ABBBBAAA"],["@@@DHBAEC@A@"],["@@AA@BB@"],["@@BB@CAA@D"],["@@B@C@BB@A"],["@@@DBABAA@BAA@AB"],["@@@AABB@"],["@@@AABB@"],["@@@AADBA"],["@@DC@CA@ADA@ADD@"],["@@KBEBGACBEDEJAFHHAB@LABBDA@@AA@CBBB@DD@@DCDCB@JBBHADBFADBLC@MDEBIA@@GJAHGCCBEAA@CCA@CAE"],["@@@AAAADD@"],["@@HE@C@ICAA@AHAHCEEFBF@BD@FA"],["@@BACA@CC@@DFD"],["@@@AA@BB"],["@@BCFE@ACCDQCACB@FCBCLGHFFBHFDB@DE@AEBBE"],["@@@ACAAFFA"],["@@BACBB@"],["@@B@C@BB@A"],["@@@AABB@"],["@@@AA@@DBB@C"],["@@ACABDB"],["@@BACA@BBB"],["@@A@BB@A"],["@@FADIFEAICAACC@ABI@CFBDCD@BCHFFLB"],["@@H@@BF@BECEBEBACA@AA@KD@JBH"],["@@@CE@BFB@BA"],["@@AB@FDC@AAA"],["@@DHFEDAFGACBCMBEJ@D"],["@@DBBADABAB@BCKBCF"],["@@A@@BB@@A"],["@@@AA@BB"],["@@@AADBA"],["@@@DBAAA"],["@@BAEBBBBA"],["@@BC@AAAEDBDD@"],["@@B@@AAB"],["@@BACKAAC@@JDDBBB@"],["@@AA@BB@"],["@@BCA@@D"],["@@@EAABAE@AAA@@JF@@FBBBA@C"],["@@@CCB@BD@"],["@@AA@GAAEAAEE@AJFLDDFADFF@@EEC"],["@@AADCDEACFEGA@EEB@FEDAHAFDBJB"],["@@JDB@ACDC@AA@ACB@@ADA@EC@@EAEC@E@AECAABBFIBED@F@DFHFDDAFF"],["@@DC@AKE@ABADDF@BCFCAAIEG@CBAB@DABAFGDBBXF"],["@@BAAAC@ADDBBA"],["@@BCAAIBA@BDBDJB@CAA"],["@@BCCGGCGBABBHFDL@"],["@@J@FC@AAKFGCIC@EDADAD@B@BCBAAEHI@AF@BB@@DT@"],["@@CEMI@ABEHHFBHBHAFDFBF@BCLBDC@AGIK@OMDKJM@CAAC@YP@AHKAGAACBGHEGC@GBMDCD@HBDFDDDBXCFBNAHEBA@@IEAGCK@CNBDLHHD@BEBDFGD@DVJBBBBBCF@BECGACLGBEAADEDADFF@DE@E"],["@@@CEA@DDDBA"],["@@FEFBD@DEC@@CCAACGF@AE@CCBAC@CCCCCBBBG@AHH@DHH@DFADABE@CD@BD@DF@BABBDDBH@DBDB@E@AEAFABAKCAA@EDA"],["@@D@ACAACD@B@BDA"],["@@BAC@BB"],["@@B@BBBA@EACGAEFA@GDBHJJFA@CB@BCAA@C"],["@@D@BCBEAECCGC@BIB@CAA@FA@@PTD"],["@@DE@KG@CBAHBDDABFB@"],["@@BB@CAB"],["@@BHBB@CAEA@"],["@@BADBDABAD@BAAABAAAABABAA@CA@ADAAAB@DABCACCC@BRHCBC"],["@@@A@ACA@DDB"],["@@DAACCD@BB@"],["@@BAC@BB"],["@@AAA@BDBA"],["@@BBBAAAAB"],["@@CAA@FB"],["@@@BD@DDCDBDDBDAB@FCAAE@@EBABEE@CAI@AACAGF@DFDF@DA"],["@@BACA@BBB"],["@@B@@AEABBBB"],["@@DFPFBFF@BCFCFICCDEBIQA@DA@EC@ECCEAE@FJIBABD@@DCAABBJDF"]],"encodeOffsets":[[[116862,22803]],[[116861,22818]],[[116860,22817]],[[116886,22776]],[[116936,22767]],[[117006,22758]],[[116932,22748]],[[116970,22738]],[[116618,22917]],[[116612,22891]],[[116626,22888]],[[116629,22880]],[[116725,22874]],[[116708,22866]],[[116720,22861]],[[117054,23075]],[[117017,23092]],[[117010,23091]],[[117081,23081]],[[117014,23081]],[[117054,23075]],[[117062,23071]],[[117024,23072]],[[117021,23072]],[[116957,23067]],[[117043,23052]],[[117035,23059]],[[117183,23086]],[[117113,23039]],[[117114,23018]],[[117122,23021]],[[117082,23017]],[[117084,23018]],[[117081,23011]],[[116966,22997]],[[117006,22983]],[[116968,22976]],[[117146,22985]],[[117136,22938]],[[117033,22925]],[[117063,22925]],[[117064,22919]],[[117029,22917]],[[117073,22876]],[[117038,22915]],[[117075,22911]],[[117036,22912]],[[117039,22911]],[[117043,22905]],[[117051,22909]],[[117044,22906]],[[117050,22906]],[[117074,22902]],[[117143,22898]],[[117036,22899]],[[117120,22880]],[[117102,22876]],[[117073,22876]],[[117111,22873]],[[117085,22870]],[[117121,22865]],[[117041,22863]],[[117121,22865]],[[117118,22859]],[[117077,22857]],[[117068,22845]],[[117060,22836]],[[117070,22834]],[[117064,22810]],[[117100,22804]],[[117100,22803]],[[117118,22799]],[[117120,22799]],[[117103,22791]],[[117097,22787]],[[117105,22856]],[[117117,22855]],[[117039,22789]],[[116787,22826]],[[116803,22822]],[[116823,22817]],[[116799,22797]],[[116780,22791]],[[116882,22747]],[[116881,22757]],[[116774,22741]],[[116575,22748]],[[116686,22746]],[[116733,22725]],[[117001,22721]],[[117036,22720]],[[117038,22719]],[[117053,22714]],[[116651,22714]],[[117053,22714]],[[116664,22710]],[[116984,22706]],[[116645,22704]],[[116640,22702]],[[116640,22702]],[[116646,22692]],[[116663,22685]],[[116998,22691]],[[117001,22702]]]}}],"UTF8Encoding":true});}));