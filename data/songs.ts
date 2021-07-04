export enum SongCategory {
    TRAD = 'trad',
    FOLK = 'folk',
    IRISH = 'irish',
    PAGAN = 'pagan',
}

export type Song = {
    category?: SongCategory
    name: string
    notes?: string[]
    recording?: string
    transpo?: number
}

/*
 * Pour les transpositions, la note la plus haute de début des songs semble être G4 (pour l'instant)
 * la note de pan la plus basse est E2 donc faut potentiellement faire -27 semitons ?
 */
export default [
    {
        name: 'Bella ciao',
        notes: ['E4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5'],
        recording:
            'E4@0,A4@280,B4@560,C5@840,A4@1120,E4@1960,A4@2240,B4@2520,C5@2800,A4@3080,E4@3920,A4@4200,B4@4480,C5@4760,B4@5320,A4@5600,C5@5880,B4@6440,A4@6720,E5@7000,E5@7560,E5@8120,D5@8680,E5@8960,F5@9240,F5@9520,F5@10360,E5@10640,D5@10920,F5@11200,E5@11480,E5@12320,D5@12600,C5@12880,B4@13160,E5@13720,C5@14280,B4@14840,A4@15400,end@16520',
    },
    {
        name: 'Game of Thrones',
        notes: ['G4', 'C4', 'Eb4', 'F4', 'Bb3', 'D4', 'G3', 'Ab3', 'F3'],
        recording:
            'G4@0,C4@1080,C4@2160,Eb4@2160,F4@2340,G4@2520,C4@3240,Eb4@3960,F4@4140,Bb3@4320,D4@4320,G3@4680,Bb3@5040,C4@5220,D4@5400,G3@5760,Bb3@6120,C4@6300,Bb3@6480,D4@6480,G3@6840,Bb3@7200,C4@7380,D4@7560,G3@7920,Bb3@8280,F4@8640,Bb3@9720,Bb3@10800,Eb4@10800,D4@10980,F4@11160,Bb3@11880,Eb4@12600,D4@12780,Ab3@12960,C4@12960,F3@13320,Ab3@13680,Bb3@13860,C4@14040,F3@14400,Ab3@14760,Bb3@14940,Ab3@15120,C4@15120,F3@15480,Ab3@15840,Bb3@16020,C4@16200,F3@16560,Ab3@16920,G4@17280,C4@18360,C4@19440,Eb4@19440,F4@19620,G4@19800,C4@20520,Eb4@21240,F4@21420,Bb3@21600,D4@21600,G3@21960,Bb3@22320,C4@22500,D4@22680,G3@23040,Bb3@23400,C4@23580,Bb3@23760,D4@23760,G3@24120,Bb3@24480,C4@24660,D4@24840,G3@25200,Bb3@25560,F4@25920,Bb3@27000,Bb3@28080,Eb4@28080,D4@28260,F4@28440,Bb3@29160,Eb4@29880,D4@30060,Ab3@30240,C4@30240,G3@30600,Ab3@30960,Bb3@31140,C4@31320,G3@31680,Ab3@32040,Bb3@32220,Ab3@32400,C4@32400,G3@32760,Ab3@33120,Bb3@33300,C4@33480,G3@33840,Ab3@34200,G4@34560,C4@35640,C4@36720,Eb4@36720,F4@36900,G4@37080,C4@37800,Eb4@38520,F4@38700,D4@38880,Bb3@39600,C4@39780,D4@39960,Bb3@40680,C4@40860,D4@41040,Bb3@41760,C4@41940,D4@42120,Bb3@42480,D4@42840,F4@43200,Bb3@44280,D4@45360,Eb4@46080,D4@46440,C4@47520,G3@47880,Ab3@48240,Bb3@48420,C4@48600,G3@48960,Ab3@49320,Bb3@49500,C4@49680,G3@50040,Ab3@50400,Bb3@50580,end@50760',
    },
    {
        name: 'Lambada',
        notes: ['F#5', 'E5', 'D5', 'C#5', 'B4', 'A4', 'F#4', 'E4', 'G4'],
        recording:
            'F#5@0,E5@600,D5@800,C#5@1000,B4@1200,B4@1600,D5@1800,C#5@2000,B4@2200,A4@2400,B4@2600,F#4@2800,E4@3000,F#4@3200,F#4@4400,F#5@4800,E5@5400,D5@5600,C#5@5800,B4@6000,B4@6400,D5@6600,C#5@6800,B4@7000,A4@7200,B4@7400,F#4@7600,E4@7800,F#4@8000,E5@9600,E5@10000,D5@10200,G4@10400,G4@10800,B4@11000,F#5@11200,E5@11600,D5@11800,G4@12000,B4@12400,D5@12600,C#5@12800,C#5@13000,B4@13100,A4@13200,A4@13400,A4@13800,B4@14000,A4@14200,B4@14400,E5@16000,E5@16200,E5@16400,D5@16600,G4@16800,G4@17200,B4@17400,F#5@17600,E5@18000,D5@18200,G4@18400,B4@18800,D5@19000,C#5@19200,C#5@19400,B4@19500,A4@19600,A4@20200,B4@20400,A4@20600,D5@20800,C#5@20900,B4@21000,F#4@22400,B4@22500,D5@22500,B4@22700,D5@22700,B4@22800,D5@22800,F#4@23200,B4@23300,D5@23300,B4@23500,D5@23500,B4@23600,D5@23600,A4@24000,D5@24100,F#5@24100,D5@24300,F#5@24300,D5@24400,F#5@24400,A4@24800,D5@24900,F#5@24900,D5@25100,F#5@25100,D5@25200,F#5@25200,F#4@25600,B4@25700,D5@25700,B4@25800,D5@25800,B4@25900,D5@25900,B4@26000,D5@26000,F#4@26400,B4@26500,D5@26500,B4@26700,D5@26700,B4@26800,D5@26800,A4@27200,D5@27300,F#5@27300,D5@27400,F#5@27400,D5@27500,F#5@27500,D5@27600,F#5@27600,A4@28000,D5@28100,F#5@28100,D5@28300,F#5@28300,D5@28400,F#5@28400,end@28800',
    },
    {
        category: SongCategory.TRAD,
        name: 'Danse de l’ours',
        notes: ['G4', 'A4', 'B4', 'C5', 'D5', 'E5'],
        recording:
            'E5@0,A4@280,A4@560,E5@1120,A4@1400,A4@1680,B4@2100,C5@2240,C5@2520,B4@2800,C5@3080,D5@3360,D5@3640,C5@3920,D5@4200,E5@4480,A4@4760,E5@5040,A4@5320,E5@5600,A4@5880,A4@6160,B4@6580,C5@6720,C5@7000,B4@7280,A4@7420,G4@7560,A4@7840,A4@8400,A4@8960,C5@9240,A4@9520,C5@9800,B4@10080,G4@10360,G4@10640,A4@11200,C5@11480,A4@11760,C5@12040,D5@12320,C5@13160,D5@13300,E5@13440,E5@13720,D5@14000,D5@14280,C5@14560,C5@14840,B4@15120,A4@15680,B4@15820,C5@15960,B4@16240,G4@16520,A4@16800,A4@17360,end@17920',
    },
    {
        category: SongCategory.TRAD,
        name: 'Levan Polka',
        notes: ['E4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5'],
        recording:
            'E4@0,A4@280,A4@560,B4@980,C5@1120,A4@1400,A4@1680,C5@2100,B4@2240,G4@2520,G4@2800,B4@3220,C5@3360,A4@3640,A4@3920,E4@4480,A4@4760,A4@5040,B4@5460,C5@5600,A4@5880,A4@6160,C5@6580,E5@6720,D5@7000,C5@7280,B4@7560,C5@7840,A4@8120,A4@8400,C5@8820,E5@8960,E5@9240,E5@9380,D5@9520,C5@9800,B4@10080,G4@10360,G4@10640,B4@10920,D5@11200,D5@11480,C5@11760,B4@12040,C5@12320,A4@12600,A4@12880,C5@13300,E5@13440,E5@13720,E5@13860,D5@14000,C5@14280,B4@14560,G4@14840,G4@15120,B4@15400,D5@15680,D5@15960,D5@16100,C5@16240,B4@16520,C5@16800,A4@17080,A4@17360,end@17920',
    },
    {
        category: SongCategory.TRAD,
        name: 'Zelda',
        notes: ['E4', 'F4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5'],
        recording:
            'E5@0,A4@280,E5@420,A4@700,F5@840,E5@980,D5@1120,E5@1260,E5@1680,D5@1820,C5@1960,B4@2100,B4@2380,B4@2520,C5@2660,D5@2800,C5@2940,A4@3220,E5@3360,A4@3640,E5@3780,A4@4060,F5@4200,E5@4340,D5@4480,E5@4620,E5@5040,D5@5180,C5@5320,B4@5460,B4@5740,B4@5880,C5@6020,B4@6160,A4@6300,A4@6720,B4@6860,C5@7000,E4@7140,E4@7420,A4@7560,B4@7700,C5@7840,F4@7980,F4@8260,A4@8400,B4@8540,C5@8680,B4@8820,B4@9100,D5@9240,C5@9380,B4@9520,C5@9660,A4@9940,A4@10080,B4@10220,C5@10360,E4@10500,E4@10780,A4@10920,B4@11060,C5@11200,F4@11340,F4@11620,A4@11760,B4@11900,C5@12040,B4@12180,B4@12460,D5@12600,C5@12740,B4@12880,A4@13020,end@13440',
    },
    {
        category: SongCategory.TRAD,
        name: 'Las Fatmas',
        notes: ['E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5'],
        recording:
            'E4@0,E4@320,A4@640,A4@960,C5@1280,C5@1600,B4@1920,B4@2560,C5@2880,D5@3200,E5@3520,D5@3680,C5@3840,B4@4160,C5@4480,A4@4800,E4@5120,E4@5440,A4@5760,A4@6080,C5@6400,C5@6720,B4@7040,B4@7680,C5@8000,D5@8320,E5@8640,D5@8800,C5@8960,B4@9280,A4@9600,E4@10240,E4@10560,A4@10880,A4@11200,C5@11520,C5@11840,B4@12160,B4@12800,C5@13120,D5@13440,E5@13760,D5@13920,C5@14080,B4@14400,C5@14720,A4@15040,E4@15360,E4@15680,A4@16000,A4@16320,C5@16640,C5@16960,B4@17280,B4@17920,C5@18240,D5@18560,E5@18880,D5@19040,C5@19200,B4@19520,A4@19840,F5@20480,E5@20800,D5@21120,E5@21600,F5@21760,C5@22080,B4@22400,B4@23040,C5@23360,D5@23680,D5@24000,C5@24320,B4@24640,C5@24960,A4@25280,F5@25600,E5@25920,D5@26240,E5@26720,F5@26880,C5@27200,B4@27520,G4@28160,F4@28480,E4@28800,E4@29120,C5@29440,B4@29760,A4@30080,F5@30720,E5@31040,D5@31360,E5@31840,F5@32000,C5@32320,B4@32640,B4@33280,C5@33600,D5@33920,D5@34240,C5@34560,B4@34880,C5@35200,A4@35520,F5@35840,E5@36160,D5@36480,E5@36960,F5@37120,C5@37440,B4@37760,G4@38400,F4@38720,E4@39040,E4@39360,C5@39680,B4@40000,A4@40320,end@40960',
    },
    {
        category: SongCategory.TRAD,
        name: 'Jan Mijne Man',
        notes: ['G4', 'A4', 'B4', 'C5', 'D5', 'E5'],
        recording:
            'C5@0,C5@280,B4@420,A4@560,C5@980,B4@1120,A4@1260,G4@1400,B4@1540,A4@1680,G4@1820,A4@1960,B4@2100,C5@2240,C5@2520,B4@2660,A4@2800,C5@3220,B4@3360,A4@3500,G4@3640,B4@3780,A4@3920,C5@4480,C5@4760,B4@4900,A4@5040,C5@5460,B4@5600,A4@5740,G4@5880,B4@6020,A4@6160,G4@6300,A4@6440,B4@6580,C5@6720,C5@7000,B4@7140,A4@7280,C5@7700,B4@7840,A4@7980,G4@8120,B4@8260,A4@8400,C5@8960,C5@9240,D5@9380,E5@9520,E5@9800,D5@9940,C5@10080,B4@10220,C5@10360,D5@10500,E5@10640,D5@10780,C5@10920,B4@11060,C5@11200,C5@11480,D5@11620,E5@11760,E5@12040,D5@12180,C5@12320,B4@12460,C5@12600,D5@12740,E5@12880,D5@13020,C5@13160,B4@13300,C5@13440,C5@13720,B4@13860,A4@14000,A4@14280,C5@14420,B4@14560,A4@14700,G4@14840,B4@14980,A4@15120,G4@15260,A4@15400,B4@15540,C5@15680,C5@15960,B4@16100,A4@16240,A4@16520,C5@16660,B4@16800,A4@16940,G4@17080,B4@17220,A4@17360,end@17920',
    },
    {
        category: SongCategory.TRAD,
        name: 'Valse à Ollu',
        notes: ['G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5'],
        recording:
            'A4@0,B4@180,C5@360,D5@540,E5@720,F5@900,E5@1080,D5@1440,C5@1800,D5@2160,G4@2340,B4@2520,D5@2700,E5@2880,G5@3060,E5@3240,D5@3600,B4@3960,A4@4320,B4@4500,C5@4680,D5@4860,E5@5040,F5@5220,E5@5400,D5@5760,C5@6120,D5@6480,G4@6660,B4@6840,D5@7020,E5@7200,D5@7380,C5@7560,B4@7920,G4@8280,A4@8640,B4@9180,C5@9360,A4@9720,B4@10260,C5@10440,B4@10800,C5@11340,D5@11520,C5@11880,B4@12240,G4@12600,A4@12960,B4@13500,C5@13680,A4@14040,B4@14580,C5@14760,B4@15120,C5@15660,D5@15840,C5@16200,B4@16560,G4@16920,A4@17280,C5@17640,A4@17820,C5@18000,A4@18180,A4@18360,C5@18720,A4@18900,C5@19080,A4@19260,G4@19440,B4@19800,G4@19980,B4@20160,G4@20340,G4@20520,B4@20880,G4@21060,B4@21240,G4@21420,A4@21600,C5@21960,A4@22140,C5@22320,A4@22500,A4@22680,C5@23040,A4@23220,C5@23400,A4@23580,G4@23760,B4@24120,G4@24300,B4@24480,G4@24660,G4@24840,B4@25200,G4@25380,B4@25560,G4@25740,E5@25920,C5@26100,A4@26280,E5@26460,C5@26640,A4@26820,F5@27000,C5@27180,A4@27360,F5@27540,C5@27720,A4@27900,D5@28080,B4@28260,G4@28440,D5@28620,B4@28800,G4@28980,E5@29160,B4@29340,G4@29520,E5@29700,B4@29880,G4@30060,E5@30240,C5@30420,A4@30600,E5@30780,C5@30960,A4@31140,F5@31320,C5@31500,A4@31680,F5@31860,C5@32040,A4@32220,D5@32400,B4@32580,G4@32760,D5@32940,B4@33120,G4@33300,E5@33480,B4@33660,G4@33840,E5@34020,B4@34200,G4@34380,A4@34560,B4@35100,C5@35280,A4@35640,B4@36180,C5@36360,B4@36720,C5@37260,D5@37440,C5@37800,B4@38160,G4@38520,A4@38880,B4@39420,C5@39600,A4@39960,B4@40500,C5@40680,B4@41040,C5@41580,D5@41760,C5@42120,B4@42480,G4@42840,end@43200',
    },
    {
        category: SongCategory.TRAD,
        name: 'St Patrick An Dro',
        notes: ['G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'G5'],
        recording:
            'A4@0,B4@180,C5@360,B4@540,A4@720,E5@1080,C5@1440,A4@1800,B4@2160,E5@2520,D5@2880,E5@3060,D5@3240,C5@3420,B4@3600,A4@4140,C5@4320,A4@4860,B4@5040,A4@5760,B4@5940,C5@6120,B4@6300,A4@6480,E5@6840,C5@7200,A4@7560,B4@7920,E5@8280,D5@8640,E5@8820,D5@9000,B4@9180,C5@9360,A4@9900,C5@10080,A4@10260,B4@10440,G4@10620,A4@10800,A4@11520,B4@11700,C5@11880,D5@12060,E5@12240,E5@12600,E5@12780,D5@12960,G5@13320,E5@13680,C5@14040,A4@14400,B4@14580,C5@14760,E5@14940,D5@15120,E5@15660,D5@15840,E5@16020,D5@16200,C5@16380,B4@16560,A4@17280,B4@17460,C5@17640,D5@17820,E5@18000,E5@18360,E5@18540,D5@18720,G5@19080,E5@19440,C5@19800,A4@20160,B4@20340,C5@20520,E5@20700,D5@20880,B4@21420,C5@21600,A4@21780,B4@21960,G4@22140,A4@22320,end@23040',
    },
    {
        category: SongCategory.TRAD,
        name: 'O Son Do Ar',
        notes: ['E4', 'F#4', 'G4', 'A4', 'B4', 'D5', 'E5', 'C#5', 'D4'],
        recording:
            'E4@0,F#4@320,G4@640,F#4@1120,G4@1280,A4@1600,G4@2080,A4@2240,B4@2560,A4@3040,G4@3200,E4@3520,G4@4000,B4@4160,D5@4480,E5@4960,D5@5120,C#5@5440,D5@5920,C#5@6080,C#5@6400,B4@6720,A4@7200,B4@7360,E4@7680,F#4@8000,G4@8320,F#4@8800,G4@8960,A4@9280,G4@9760,A4@9920,B4@10240,A4@10720,G4@10880,E4@11200,G4@11680,A4@11840,G4@12160,F#4@12640,E4@12800,D4@13120,E4@13600,F#4@13760,E4@14080,E4@15360,F#4@15680,G4@16000,F#4@16480,G4@16640,A4@16960,G4@17440,A4@17600,B4@17920,A4@18400,G4@18560,E4@18880,G4@19360,B4@19520,D5@19840,E5@20320,D5@20480,C#5@20800,D5@21280,C#5@21440,C#5@21760,B4@22080,A4@22560,B4@22720,E4@23040,F#4@23360,G4@23680,F#4@24160,G4@24320,A4@24640,G4@25120,A4@25280,B4@25600,A4@26080,G4@26240,E4@26560,G4@27040,A4@27200,G4@27520,F#4@28000,E4@28160,D4@28480,E4@28960,F#4@29120,E4@29440,B4@30720,A4@30880,G4@31040,F#4@31200,E4@31360,F#4@32000,D4@32320,F#4@32960,E4@33280,F#4@33760,G4@33920,A4@34240,G4@34720,F#4@34880,E4@35200,F#4@35840,D4@36160,F#4@36800,F#4@37120,E4@37440,D4@37920,E4@38080,B4@38400,A4@38560,G4@38720,F#4@38880,E4@39040,F#4@39680,D4@40000,F#4@40640,E4@40960,F#4@41440,G4@41600,A4@41920,G4@42400,F#4@42560,G4@42880,F#4@43360,E4@43520,F#4@43840,E4@44320,D4@44480,E4@44800,B4@46080,A4@46240,G4@46400,F#4@46560,E4@46720,F#4@47360,D4@47680,F#4@48320,E4@48640,F#4@49120,G4@49280,A4@49600,G4@50080,F#4@50240,E4@50560,F#4@51200,D4@51520,F#4@52160,F#4@52480,E4@52800,D4@53280,E4@53440,B4@53760,A4@53920,G4@54080,F#4@54240,E4@54400,F#4@55040,D4@55360,F#4@56000,E4@56320,F#4@56800,G4@56960,A4@57280,G4@57760,F#4@57920,G4@58240,F#4@58720,E4@58880,F#4@59200,E4@59680,D4@59840,E4@60160,end@61440',
    },
    {
        category: SongCategory.TRAD,
        name: 'Tzadir katamar',
        notes: ['E4', 'G#4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5'],
        recording:
            'E4@0,A4@240,A4@480,B4@600,C5@720,A4@960,G#4@1200,A4@1440,B4@1680,E4@1920,A4@2160,A4@2400,B4@2520,C5@2640,A4@2880,E5@3120,E4@3840,A4@4080,A4@4320,B4@4440,C5@4560,A4@4800,G#4@5040,A4@5280,B4@5520,E4@5760,A4@6000,A4@6240,B4@6360,C5@6480,A4@6720,E5@6960,E5@7680,F5@7920,F5@8160,F5@8400,E5@8640,D5@8880,C5@9120,B4@9360,D5@9600,E5@9840,E5@10080,E5@10320,D5@10560,C5@10800,B4@11040,A4@11280,C5@11520,B4@11760,A4@12000,B4@12240,G#4@12480,B4@12720,E4@12960,G#4@13200,B4@13440,E5@13680,E5@14160,E5@14640,E5@15120,E5@15360,F5@15600,F5@15840,F5@16080,E5@16320,D5@16560,C5@16800,B4@17040,D5@17280,E5@17520,E5@17760,E5@18000,D5@18240,C5@18480,B4@18720,A4@18960,C5@19200,B4@19440,A4@19680,B4@19920,G#4@20160,B4@20400,E4@20640,G#4@20880,B4@21120,A4@21360,end@22320',
    },
    {
        category: SongCategory.TRAD,
        name: 'C’est sur le pont de Lyon',
        notes: ['E4', 'G4', 'A4', 'B4', 'C5', 'D5'],
        recording:
            'E4@0,E4@280,A4@560,A4@1120,A4@1680,G4@1960,A4@2240,C5@3360,C5@3640,B4@3920,A4@4760,G4@5040,B4@5320,B4@5600,A4@6160,E4@6720,E4@7000,A4@7280,A4@7840,A4@8400,G4@8680,A4@8960,C5@10080,C5@10360,B4@10640,A4@11480,G4@11760,B4@12040,B4@12320,A4@12880,A4@13440,A4@13720,D5@14000,D5@14840,C5@15120,B4@15400,C5@15680,B4@16800,A4@17080,G4@17360,A4@18200,B4@18480,G4@18760,A4@19040,A4@19600,A4@20160,A4@20440,D5@20720,D5@21560,C5@21840,B4@22120,C5@22400,B4@23520,A4@23800,G4@24080,A4@24920,B4@25200,G4@25480,A4@25760,A4@26320,end@26880',
    },
    { category: SongCategory.TRAD, name: 'La p’tite fée', notes: ['A3', 'B3', 'C4', 'D4', 'D#4', 'E4', 'F#4', 'G4', 'A4', 'B4', 'C5'] },
    {
        category: SongCategory.FOLK,
        name: 'Greensleeves',
        notes: ['A3', 'B3', 'C4', 'C#4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'],
        recording:
            'D4@0,F4@360,G4@1080,A4@1440,B4@1980,A4@2160,G4@2520,E4@3240,C4@3600,D4@4140,E4@4320,F4@4680,D4@5400,D4@5760,C#4@6300,D4@6480,E4@6840,C#4@7560,A3@7920,D4@8640,F4@9000,G4@9720,A4@10080,B4@10620,A4@10800,G4@11160,E4@11880,C4@12240,D4@12780,E4@12960,F4@13320,E4@13860,D4@14040,C#4@14400,B3@14940,C#4@15120,D4@15480,D4@16560,C5@17640,C5@18720,B4@19260,A4@19440,G4@19800,E4@20520,C4@20880,D4@21420,E4@21600,F4@21960,D4@22680,D4@23040,C#4@23580,D4@23760,E4@24120,C#4@24840,A3@25200,C5@26280,C5@27360,B4@27900,A4@28080,G4@28440,E4@29160,C4@29520,D4@30060,E4@30240,F4@30600,E4@31140,D4@31320,C#4@31680,B3@32220,C#4@32400,D4@32760,D4@33840,end@34920',
    },
    {
        category: SongCategory.IRISH,
        name: 'The Kesh Jig',
        notes: ['F#4', 'G4', 'A4', 'B4', 'D5', 'E5', 'F#5', 'G5', 'A5', 'B5'],
        recording:
            'G4@0,G4@360,G4@540,A4@720,B4@900,A4@1080,A4@1440,A4@1620,B4@1800,D5@1980,E5@2160,D5@2340,D5@2520,G5@2700,D5@2880,D5@3060,E5@3240,D5@3420,B4@3600,D5@3780,B4@3960,A4@4140,G4@4320,G4@4680,G4@4860,A4@5040,B4@5220,A4@5400,A4@5760,A4@5940,B4@6120,D5@6300,E5@6480,D5@6660,D5@6840,G5@7020,D5@7200,B4@7380,A4@7560,G4@7740,F#4@7920,G4@8100,A4@8460,G4@8640,G4@9000,G4@9180,A4@9360,B4@9540,A4@9720,A4@10080,A4@10260,B4@10440,D5@10620,E5@10800,D5@10980,D5@11160,G5@11340,D5@11520,D5@11700,E5@11880,D5@12060,B4@12240,D5@12420,B4@12600,A4@12780,G4@12960,G4@13320,G4@13500,A4@13680,B4@13860,A4@14040,A4@14400,A4@14580,B4@14760,D5@14940,E5@15120,D5@15300,D5@15480,G5@15660,D5@15840,B4@16020,A4@16200,G4@16380,F#4@16560,G4@16740,A4@17100,B4@17280,B4@17640,D5@17820,B4@18000,D5@18180,E5@18360,G5@18540,E5@18720,D5@18900,B4@19080,A4@19260,B4@19440,B4@19800,D5@19980,B4@20160,G4@20340,A4@20520,A4@20880,A4@21060,G4@21240,A4@21420,B4@21600,B4@21960,D5@22140,B4@22320,D5@22500,E5@22680,G5@22860,E5@23040,D5@23220,B4@23400,A4@23580,G5@23760,G5@24120,A5@24300,G5@24480,A5@24660,B5@24840,G5@25020,F#5@25200,G5@25380,B4@25920,B4@26280,D5@26460,B4@26640,D5@26820,E5@27000,G5@27180,E5@27360,D5@27540,B4@27720,A4@27900,B4@28080,B4@28440,D5@28620,B4@28800,G4@28980,A4@29160,A4@29520,A4@29700,G4@29880,A4@30060,B4@30240,B4@30600,D5@30780,B4@30960,D5@31140,E5@31320,G5@31500,E5@31680,D5@31860,B4@32040,A4@32220,G5@32400,G5@32760,A5@32940,G5@33120,A5@33300,B5@33480,G5@33660,F#5@33840,G5@34020,end@34560',
    },
    {
        category: SongCategory.IRISH,
        name: 'Cooley’s reel',
        notes: ['D4', 'E4', 'B4', 'A4', 'D5', 'G4', 'F#4', 'E5', 'F#5', 'G5', 'A5', 'C#5'],
        recording:
            'D4@0,E4@320,B4@480,B4@640,A4@800,B4@960,E4@1280,B4@1440,B4@1600,A4@1920,B4@2080,D5@2240,B4@2400,A4@2560,G4@2720,F#4@2880,D4@3040,A4@3200,D4@3360,B4@3520,D4@3680,A4@3840,D4@4000,F#4@4160,D4@4320,A4@4480,D4@4640,D5@4800,A4@4960,F#4@5120,D4@5280,E4@5440,B4@5600,B4@5760,A4@5920,B4@6080,E4@6400,B4@6560,B4@6720,A4@7040,B4@7200,D5@7360,E5@7520,F#5@7680,G5@7840,A5@8000,F#5@8160,E5@8320,C#5@8480,D5@8640,B4@8800,A4@8960,F#4@9120,D4@9280,E4@9440,F#4@9600,D4@9760,E4@9920,D4@10240,E4@10560,B4@10720,B4@10880,A4@11040,B4@11200,E4@11520,B4@11680,B4@11840,A4@12160,B4@12320,D5@12480,B4@12640,A4@12800,G4@12960,F#4@13120,D4@13280,A4@13440,D4@13600,B4@13760,D4@13920,A4@14080,D4@14240,F#4@14400,D4@14560,A4@14720,D4@14880,D5@15040,A4@15200,F#4@15360,D4@15520,E4@15680,B4@15840,B4@16000,A4@16160,B4@16320,E4@16640,B4@16800,B4@16960,A4@17280,B4@17440,D5@17600,E5@17760,F#5@17920,G5@18080,A5@18240,F#5@18400,E5@18560,C#5@18720,D5@18880,B4@19040,A4@19200,F#4@19360,D4@19520,E4@19680,F#4@19840,D4@20000,E4@20160,G5@20480,F#5@20640,E5@20800,B4@20960,B4@21120,E5@21440,F#5@21600,G5@21760,E5@21920,E5@22080,B4@22240,B4@22400,G5@22720,E5@22880,D5@23040,B4@23200,A4@23360,F#4@23680,A4@23840,D4@24000,A4@24160,F#4@24320,A4@24480,A4@24640,F#4@24960,A4@25120,D5@25280,E5@25440,F#5@25600,G5@25760,E5@25920,B4@26080,B4@26240,E5@26560,B4@26720,G5@26880,B4@27040,E5@27200,B4@27360,B4@27520,D5@27840,E5@28000,F#5@28160,G5@28320,A5@28480,F#5@28640,E5@28800,C#5@28960,D5@29120,B4@29280,A4@29440,F#4@29600,D4@29760,E4@29920,F#4@30080,D4@30240,E4@30400,G5@30720,F#5@30880,E5@31040,B4@31200,B4@31360,E5@31680,F#5@31840,G5@32000,E5@32160,E5@32320,B4@32480,B4@32640,G5@32960,E5@33120,D5@33280,B4@33440,A4@33600,F#4@33920,A4@34080,D4@34240,A4@34400,F#4@34560,A4@34720,A4@34880,F#4@35200,A4@35360,D5@35520,E5@35680,F#5@35840,G5@36000,E5@36160,B4@36320,B4@36480,E5@36800,B4@36960,G5@37120,B4@37280,E5@37440,B4@37600,B4@37760,D5@38080,E5@38240,F#5@38400,G5@38560,A5@38720,F#5@38880,E5@39040,C#5@39200,D5@39360,B4@39520,A4@39680,F#4@39840,D4@40000,E4@40160,F#4@40320,D4@40480,E4@40640,end@40960',
    },
    {
        category: SongCategory.IRISH,
        name: 'Lannigan’s Ball',
        notes: ['D4', 'E4', 'F#4', 'G4', 'A4', 'B4', 'C5', 'C#5', 'D5', 'E5', 'F#5', 'G5', 'A5'],
        recording:
            'E4@0,F#4@160,E4@320,G4@480,A4@800,B4@960,A4@1280,B4@1440,C#5@1600,D5@1760,D4@1920,E4@2240,F#4@2400,G4@2720,A4@2880,B4@3040,A4@3200,A4@3360,F#4@3520,D4@3680,E4@3840,F#4@4000,E4@4160,G4@4320,A4@4640,B4@4800,A4@5120,B4@5280,C#5@5440,D5@5600,E5@5760,D5@5920,B4@6080,C5@6240,B4@6400,A4@6560,B4@6720,G4@6880,E4@7040,E4@7200,E4@7520,F#4@7680,E4@7840,G4@8000,A4@8320,B4@8480,A4@8800,B4@8960,C#5@9120,D5@9280,D4@9440,E4@9760,F#4@9920,G4@10240,A4@10400,B4@10560,A4@10720,A4@10880,F#4@11040,D4@11200,E4@11360,F#4@11520,E4@11680,G4@11840,A4@12160,B4@12320,A4@12640,B4@12800,C#5@12960,D5@13120,E5@13280,D5@13440,B4@13600,C5@13760,B4@13920,A4@14080,B4@14240,G4@14400,E4@14560,E4@14720,D5@15040,E5@15200,F#5@15520,G5@15680,F#5@15840,G5@16000,E5@16160,A5@16320,G5@16480,F#5@16640,E5@16800,D5@16960,E5@17120,F#5@17440,G5@17600,F#5@17760,G5@17920,F#5@18080,D5@18240,B4@18400,B4@18560,E5@19040,F#5@19360,G5@19520,F#5@19680,G5@19840,E5@20000,A5@20160,G5@20320,F#5@20480,E5@20640,D5@20800,E5@20960,D5@21120,B4@21280,C5@21440,B4@21600,A4@21760,B4@21920,G4@22080,E4@22240,E4@22400,D5@22720,E5@22880,F#5@23200,G5@23360,F#5@23520,G5@23680,E5@23840,A5@24000,G5@24160,F#5@24320,E5@24480,D5@24640,E5@24800,F#5@25120,G5@25280,F#5@25440,G5@25600,F#5@25760,D5@25920,B4@26080,B4@26240,E5@26720,F#5@27040,G5@27200,F#5@27360,G5@27520,E5@27680,A5@27840,G5@28000,F#5@28160,E5@28320,D5@28480,E5@28640,D5@28800,B4@28960,C5@29120,B4@29280,A4@29440,B4@29600,G4@29760,E4@29920,E4@30080,end@30400',
    },
    {
        category: SongCategory.IRISH,
        name: 'Star of the County Down',
        notes: ['E4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'G5'],
        recording:
            'E4@0,G4@320,A4@640,A4@1280,A4@1600,G4@2080,A4@2240,C5@2560,C5@3200,D5@3520,C5@4000,D5@4160,E5@4480,D5@4960,C5@5120,A4@5440,G4@5920,E4@6080,G4@6400,G4@7040,G4@7360,C5@7680,B4@8000,A4@8320,A4@8960,A4@9280,G4@9760,A4@9920,C5@10240,C5@10880,D5@11200,C5@11680,D5@11840,E5@12160,D5@12640,C5@12800,A4@13120,A4@13760,A4@14080,E5@15360,G5@15680,E5@16320,E5@16640,D5@17120,C5@17280,D5@17600,D5@18240,D5@18560,C5@19040,D5@19200,E5@19520,D5@20000,C5@20160,A4@20480,G4@20960,E4@21120,G4@21440,G4@22080,G4@22400,C5@22720,B4@23040,A4@23360,A4@24000,A4@24320,G4@24800,A4@24960,C5@25280,C5@25920,D5@26240,C5@26720,D5@26880,E5@27200,D5@27680,C5@27840,A4@28160,A4@28800,A4@29120,end@30400',
    },
    {
        category: SongCategory.IRISH,
        name: 'Drowsy Maggie',
        notes: ['D4', 'E4', 'F#4', 'A4', 'B4', 'C#5', 'D5', 'E5', 'F#5', 'G5', 'A5'],
        recording:
            'E4@0,B4@360,E4@540,D5@720,E4@900,B4@1080,E4@1260,E4@1440,B4@1800,E4@1980,A4@2160,F#4@2340,D4@2520,F#4@2700,E4@2880,B4@3240,E4@3420,D5@3600,E4@3780,B4@3960,E4@4140,B4@4320,A4@4500,B4@4680,C#5@4860,D5@5040,A4@5220,F#4@5400,D4@5580,E4@5760,B4@6120,E4@6300,D5@6480,E4@6660,B4@6840,E4@7020,E4@7200,B4@7560,E4@7740,A4@7920,F#4@8100,D4@8280,F#4@8460,E4@8640,B4@9000,E4@9180,D5@9360,E4@9540,B4@9720,E4@9900,B4@10080,A4@10260,B4@10440,C#5@10620,D5@10800,A4@10980,F#4@11160,D4@11340,D5@11520,F#5@11880,D5@12060,C#5@12240,E5@12600,C#5@12780,D5@12960,E5@13140,F#5@13320,G5@13500,A5@13680,F#5@13860,G5@14040,E5@14220,D5@14400,F#5@14760,D5@14940,C#5@15120,E5@15480,C#5@15660,B4@15840,A4@16020,B4@16200,C#5@16380,D5@16560,A4@16740,F#4@16920,A4@17100,D5@17280,F#5@17640,D5@17820,C#5@18000,E5@18360,C#5@18540,D5@18720,E5@18900,F#5@19080,G5@19260,A5@19440,F#5@19620,G5@19800,E5@19980,A5@20160,F#5@20340,G5@20520,E5@20700,F#5@20880,D5@21060,E5@21240,C#5@21420,B4@21600,A4@21780,B4@21960,C#5@22140,D5@22320,A4@22500,F#4@22680,D4@22860,end@23040',
    },
    {
        category: SongCategory.IRISH,
        name: 'Killavil jig',
        notes: ['D4', 'E4', 'F#4', 'A4', 'B4', 'D5', 'E5', 'F#5', 'G5', 'A5'],
        recording:
            'B4@0,E4@180,E4@360,B4@540,E4@720,E4@900,B4@1080,D5@1260,F#5@1440,E5@1620,D5@1800,B4@1980,B4@2160,A4@2340,F#4@2520,F#4@2700,E4@2880,F#4@3060,D4@3240,F#4@3420,A4@3600,B4@3780,A4@3960,F#4@4140,B4@4320,E4@4500,E4@4680,B4@4860,E4@5040,E4@5220,B4@5400,D5@5580,F#5@5760,E5@5940,D5@6120,B4@6300,B4@6480,A4@6660,B4@6840,D5@7020,A4@7200,F#4@7380,F#4@7560,E4@7740,D4@7920,E4@8100,B4@8640,E4@8820,E4@9000,B4@9180,E4@9360,E4@9540,B4@9720,D5@9900,F#5@10080,E5@10260,D5@10440,B4@10620,B4@10800,A4@10980,F#4@11160,F#4@11340,E4@11520,F#4@11700,D4@11880,F#4@12060,A4@12240,B4@12420,A4@12600,F#4@12780,B4@12960,E4@13140,E4@13320,B4@13500,E4@13680,E4@13860,B4@14040,D5@14220,F#5@14400,E5@14580,D5@14760,B4@14940,B4@15120,A4@15300,B4@15480,D5@15660,A4@15840,F#4@16020,F#4@16200,E4@16380,D4@16560,E4@16740,E5@17280,F#5@17640,G5@17820,F#5@18000,E5@18180,F#5@18360,A5@18540,F#5@18720,E5@18900,D5@19080,B4@19260,B4@19440,A4@19620,F#4@19800,F#4@19980,E4@20160,F#4@20340,D4@20520,F#4@20700,A4@20880,D5@21060,B4@21240,A4@21420,E5@21600,F#5@21960,G5@22140,F#5@22320,E5@22500,F#5@22680,A5@22860,F#5@23040,E5@23220,D5@23400,B4@23580,B4@23760,A4@23940,B4@24120,D5@24300,A4@24480,F#4@24660,F#4@24840,E4@25020,D4@25200,E4@25380,E5@25920,F#5@26280,G5@26460,F#5@26640,E5@26820,F#5@27000,A5@27180,F#5@27360,E5@27540,D5@27720,B4@27900,B4@28080,A4@28260,F#4@28440,F#4@28620,E4@28800,F#4@28980,D4@29160,F#4@29340,A4@29520,D5@29700,B4@29880,A4@30060,E5@30240,F#5@30600,G5@30780,F#5@30960,E5@31140,F#5@31320,A5@31500,F#5@31680,E5@31860,D5@32040,B4@32220,B4@32400,A4@32580,B4@32760,D5@32940,A4@33120,F#4@33300,F#4@33480,E4@33660,D4@33840,E4@34020,end@34560',
    },
    {
        category: SongCategory.IRISH,
        name: 'Musical priest',
        notes: ['F#4', 'A4', 'B4', 'C#5', 'D5', 'E5', 'F#5', 'A5', 'B5'],
        recording:
            'B4@0,A4@180,F#4@360,B4@540,B4@720,A4@900,B4@1080,B4@1440,D5@1620,C#5@1800,B4@1980,A4@2160,F#5@2340,E5@2520,C#5@2700,B4@2880,A4@3060,F#4@3240,B4@3420,B4@3600,A4@3780,B4@3960,B4@4320,D5@4500,C#5@4680,B4@4860,A4@5040,C#5@5220,B4@5400,B4@5760,A4@5940,F#4@6120,B4@6300,B4@6480,A4@6660,B4@6840,B4@7200,D5@7380,C#5@7560,B4@7740,A4@7920,F#5@8100,E5@8280,C#5@8460,B4@8640,A4@8820,F#4@9000,B4@9180,B4@9360,A4@9540,B4@9720,B4@10080,D5@10260,C#5@10440,B4@10620,A4@10800,C#5@10980,B4@11160,B4@11520,C#5@11700,D5@11880,D5@12240,C#5@12420,D5@12600,F#5@12780,E5@12960,D5@13140,C#5@13320,A4@13500,E5@13680,A4@13860,F#5@14040,A4@14220,E5@14400,A4@14580,D5@14760,C#5@14940,B4@15120,C#5@15300,D5@15480,E5@15660,F#5@15840,B5@16020,A5@16200,F#5@16380,E5@16560,C#5@16740,B4@16920,B4@17280,C#5@17460,D5@17640,D5@18000,C#5@18180,D5@18360,F#5@18540,E5@18720,D5@18900,C#5@19080,A4@19260,E5@19440,A4@19620,F#5@19800,A4@19980,E5@20160,A4@20340,D5@20520,C#5@20700,B4@20880,C#5@21060,D5@21240,E5@21420,F#5@21600,B5@21780,A5@21960,F#5@22140,E5@22320,C#5@22500,B4@22680,B4@23040,C#5@23220,D5@23400,B4@23580,B4@23760,B5@24120,A5@24300,F#5@24480,B5@24660,A5@24840,F#5@25020,E5@25200,C#5@25380,A4@25560,B4@25740,C#5@25920,E5@26100,D5@26280,B4@26460,B4@26640,B5@27000,A5@27180,F#5@27360,B5@27540,A5@27720,F#5@27900,E5@28080,C#5@28260,B4@28440,B4@28800,C#5@28980,D5@29160,B4@29340,B4@29520,B5@29880,A5@30060,F#5@30240,B5@30420,A5@30600,F#5@30780,E5@30960,C#5@31140,A4@31320,B4@31500,C#5@31680,E5@31860,D5@32040,C#5@32220,B4@32400,C#5@32580,D5@32760,E5@32940,F#5@33120,B5@33300,A5@33480,F#5@33660,E5@33840,C#5@34020,B4@34200,end@34560',
    },
    {
        category: SongCategory.IRISH,
        name: 'Trip to Pakistan',
        notes: ['D4', 'E4', 'F#4', 'G4', 'A4', 'B4', 'C5', 'D5'],
        recording:
            'E4@0,G4@180,B4@360,E4@540,G4@720,B4@1260,A4@1440,B4@1980,A4@2160,G4@2340,F#4@2520,G4@2700,E4@2880,G4@3060,B4@3240,E4@3420,G4@3600,B4@4140,A4@4320,G4@4500,F#4@4680,G4@4860,E4@5040,E4@5760,G4@5940,B4@6120,E4@6300,G4@6480,B4@7020,A4@7200,B4@7740,A4@7920,G4@8100,F#4@8280,G4@8460,E4@8640,G4@8820,B4@9000,E4@9180,G4@9360,B4@9900,A4@10080,G4@10260,F#4@10440,G4@10620,E4@10800,E4@11520,G4@11700,B4@11880,G4@12060,C5@12240,A4@12780,B4@12960,D5@13500,A4@13680,G4@13860,F#4@14040,G4@14220,E4@14400,G4@14580,B4@14760,G4@14940,C5@15120,A4@15660,B4@15840,A4@16020,G4@16200,B4@16380,A4@16560,E4@17280,G4@17460,B4@17640,G4@17820,C5@18000,A4@18540,B4@18720,D5@19260,A4@19440,G4@19620,F#4@19800,G4@19980,E4@20160,G4@20340,B4@20520,G4@20700,C5@20880,A4@21420,B4@21600,A4@21780,G4@21960,B4@22140,A4@22320,F#4@23040,G4@23220,B4@23400,F#4@23580,G4@23760,B4@23940,G4@24120,F#4@24300,E4@24480,F#4@24660,G4@24840,E4@25020,F#4@25200,G4@25380,F#4@25560,E4@25740,D4@25920,F#4@26100,A4@26280,D4@26460,F#4@26640,A4@26820,D4@27000,F#4@27180,A4@27360,G4@27540,F#4@27720,G4@27900,E4@28080,F#4@28800,G4@28980,B4@29160,F#4@29340,G4@29520,B4@29700,G4@29880,F#4@30060,E4@30240,F#4@30420,G4@30600,E4@30780,F#4@30960,G4@31140,F#4@31320,E4@31500,D4@31680,F#4@31860,A4@32040,D4@32220,F#4@32400,A4@32580,D4@32760,F#4@32940,A4@33120,G4@33300,F#4@33480,G4@33660,E4@33840,end@34560',
    },
    {
        category: SongCategory.PAGAN,
        name: 'Fairy tale',
        notes: ['B3', 'D4', 'E4', 'F#4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F#5', 'G5'],
        recording:
            'E4@0,F#4@200,G4@400,F#4@800,E4@1000,F#4@1200,G4@1400,F#4@1600,D4@2000,B3@2400,B4@2800,A4@3400,G4@3600,F#4@3800,G4@4000,E4@4400,B3@4800,G4@5000,E4@5200,E4@5600,F#4@5800,G4@6000,A4@6200,F#4@6400,D4@6800,D4@7200,F#4@7400,D5@7600,A4@7800,G4@8000,F#4@8200,E4@8400,D4@8600,E4@8800,E4@9600,F#4@9800,G4@10000,F#4@10400,E4@10600,F#4@10800,G4@11000,F#4@11200,D4@11600,B3@12000,B4@12400,A4@13000,G4@13200,F#4@13400,G4@13600,E4@14000,B3@14400,G4@14600,E4@14800,E4@15200,F#4@15400,G4@15600,A4@15800,F#4@16000,D4@16400,D4@16800,F#4@17000,D5@17200,A4@17400,G4@17600,F#4@17800,E4@18000,D4@18200,E4@18400,E4@19200,G4@19400,E5@19600,B4@20000,A4@20200,G4@20400,B4@20600,A4@20800,F#4@21200,B4@21600,D5@21800,F#5@22000,G5@22400,F#5@22600,E5@22800,D5@23000,E5@23200,B4@23600,E4@24000,E5@24200,B4@24400,G4@24800,A4@25000,B4@25200,C5@25400,A4@25600,F#4@26000,D4@26400,F#4@26600,D5@26800,A4@27000,G4@27200,F#4@27400,E4@27600,D4@27800,E4@28000,E4@28800,G4@29000,E5@29200,B4@29600,A4@29800,G4@30000,B4@30200,A4@30400,F#4@30800,B4@31200,D5@31400,F#5@31600,G5@32000,F#5@32200,E5@32400,D5@32600,E5@32800,B4@33200,E4@33600,E5@33800,B4@34000,G4@34400,A4@34600,B4@34800,C5@35000,A4@35200,E4@35600,E4@36000,F#4@36200,G4@36400,A4@36600,G4@36800,F#4@37000,D4@37200,E4@37400,F#4@37600,B4@38400,E4@38600,G4@38800,B4@39000,E4@39200,G4@39400,B4@39600,D4@39800,F#4@40000,B4@40200,D4@40400,F#4@40600,B4@40800,D4@41000,G4@41200,A4@41400,D4@41600,G4@41800,B4@42000,E4@42200,G4@42400,B4@42600,E4@42800,G4@43000,C5@43200,E4@43400,G4@43600,B4@43800,E4@44000,G4@44200,A4@44400,D4@44600,F#4@44800,A4@45000,D4@45200,F#4@45400,B4@45600,D4@45800,F#4@46000,A4@46200,D4@46400,F#4@46600,B4@46800,E4@47000,G4@47200,B4@47400,E4@47600,G4@47800,B4@48000,E4@48200,G4@48400,B4@48600,E4@48800,G4@49000,B4@49200,D4@49400,F#4@49600,B4@49800,D4@50000,F#4@50200,B4@50400,D4@50600,G4@50800,A4@51000,D4@51200,G4@51400,B4@51600,E4@51800,G4@52000,B4@52200,E4@52400,G4@52600,C5@52800,E4@53000,G4@53200,B4@53400,E4@53600,G4@53800,A4@54000,D4@54200,F#4@54400,A4@54600,D4@54800,F#4@55000,B4@55200,D4@55400,F#4@55600,A4@55800,D4@56000,F#4@56200,B4@56400,E4@56600,G4@56800,B4@57000,E4@57200,G4@57400,E5@57600,G4@57800,B4@58000,E5@58200,G4@58400,B4@58600,D5@58800,F#4@59000,A4@59200,D5@59400,F#4@59600,A4@59800,D5@60000,F#4@60200,B4@60400,D5@60600,F#4@60800,B4@61000,E5@61200,G4@61400,B4@61600,E5@61800,G4@62000,B4@62200,E5@62400,G4@62600,C5@62800,E5@63000,G4@63200,C5@63400,D5@63600,F#4@63800,A4@64000,D5@64200,F#4@64400,A4@64600,D5@64800,F#4@65000,B4@65200,D5@65400,F#4@65600,B4@65800,E5@66000,G4@66200,B4@66400,E5@66600,G4@66800,B4@67000,G5@67200,B4@67400,E5@67600,G5@67800,B4@68000,E5@68200,F#5@68400,A4@68600,D5@68800,F#5@69000,A4@69200,D5@69400,F#5@69600,B4@69800,D5@70000,F#5@70200,B4@70400,D5@70600,G5@70800,B4@71000,E5@71200,G5@71400,F#5@71600,D5@71800,E5@72000,G4@72200,C5@72400,E5@72600,G4@72800,C5@73000,E5@73200,A4@73400,C5@73600,E5@73800,A4@74000,C5@74200,D5@74400,F#4@74600,A4@74800,D5@75000,F#4@75200,A4@75400,D5@75600,F#4@75800,B4@76000,D5@76200,end@76400',
    },
    {
        name: 'Arrietty',
        notes: ['Bb4', 'C5', 'Eb5', 'F5', 'G5', 'Bb5'],
        recording:
            'C5@0,Eb5@200,F5@400,F5@800,Eb5@1000,F5@1200,Bb5@1400,G5@1600,F5@2400,Eb5@2600,F5@2800,F5@3200,G5@3400,F5@3600,Eb5@3800,C5@4000,Bb4@4400,F5@5200,F5@5600,G5@5800,F5@6000,Eb5@6200,C5@6400,Eb5@7200,F5@7600,end@8800',
    },
    {
        name: 'Ptite poule grise',
        notes: ['E4', 'F#4', 'G4', 'A4', 'B4'],
        recording:
            'E4@0,E4@280,B4@560,B4@840,A4@1120,B4@1400,G4@1960,F#4@2240,G4@2380,A4@2520,A4@2800,B4@3080,A4@3360,G4@3640,F#4@3920,E4@4200,F#4@4760,G4@5040,F#4@5320,E4@5600,B4@6160,E4@6720,E4@7000,F#4@7140,G4@7280,F#4@7560,E4@7840,B4@8400,E4@8960,end@9520',
    },
    {
        name: 'Mistral',
        notes: ['B4', 'C#5', 'D5', 'E5', 'F#5', 'G5', 'A5', 'A#5', 'B5', 'C#6', 'D6', 'E6'],
        recording:
            'B4@0,D5@280,B5@560,B5@1120,A5@1680,E5@2240,C#5@3360,E5@3640,C#6@3920,C#6@4480,D6@5040,C#6@5600,B5@6160,D5@6720,F#5@7000,D6@7280,D6@7840,E6@8400,G5@8960,E5@10080,G5@10360,C#6@10640,C#6@11200,A#5@11760,B5@12320,end@12880',
    },
    {
        category: SongCategory.TRAD,
        name: 'Lichtjes',
        notes: ['G4', 'C5', 'D5', 'E5', 'G5', 'F5', 'B4', 'A5'],
        recording:
            'G4@0,C5@280,D5@560,E5@840,C5@1400,G5@1680,F5@2240,E5@2520,C5@3080,G4@3360,C5@3640,D5@3920,E5@4200,C5@4760,F5@5040,E5@5600,D5@5880,G4@6720,B4@7000,C5@7280,D5@7560,B4@8120,F5@8400,E5@8960,D5@9240,B4@9800,G4@10080,B4@10360,C5@10640,D5@10920,G5@11480,G5@11760,F5@12320,E5@12600,G4@13440,C5@13720,D5@14000,E5@14280,C5@14840,G5@15120,F5@15680,E5@15960,C5@16520,G4@16800,C5@17080,D5@17360,E5@17640,E5@18200,F5@18480,G5@19040,A5@19320,A5@20160,F5@20720,E5@21000,D5@21560,G5@21840,E5@22400,D5@22680,C5@23240,G4@23520,C5@23800,D5@24080,E5@24360,F5@24920,D5@25200,E5@25760,C5@26040,end@26880',
    },
] as Song[]
