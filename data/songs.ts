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
        category: SongCategory.TRAD,
        name: 'Danse de l’ours',
        notes: ['G4', 'A4', 'B4', 'C5', 'D5', 'E5'],
        recording:
            'E5@0,A4@280,A4@560,E5@1120,A4@1400,A4@1680,B4@2100,C5@2240,C5@2520,B4@2800,C5@3080,D5@3360,D5@3640,C5@3920,D5@4200,E5@4480,A4@4760,E5@5040,A4@5320,E5@5600,A4@5880,A4@6160,B4@6580,C5@6720,C5@7000,B4@7280,A4@7420,G4@7560,A4@7840,A4@8400,A4@8960,C5@9240,A4@9520,C5@9800,B4@10080,G4@10360,G4@10640,A4@11200,C5@11480,A4@11760,C5@12040,D5@12320,C5@13160,D5@13300,E5@13440,E5@13720,D5@14000,D5@14280,C5@14560,C5@14840,B4@15120,A4@15680,B4@15820,C5@15960,B4@16240,G4@16520,A4@16800,A4@17360,end@17920',
    },
    { category: SongCategory.TRAD, name: 'Levan Polka', notes: ['E4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5'] },
    { category: SongCategory.TRAD, name: 'Zelda', notes: ['E4', 'F4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5'] },
    { category: SongCategory.TRAD, name: 'Las Fatmas', notes: ['E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5'] },
    { category: SongCategory.TRAD, name: 'Jan Mijne Man', notes: ['G4', 'A4', 'B4', 'C5', 'D5', 'E5'] },
    { category: SongCategory.TRAD, name: 'Valse à Ollu', notes: ['G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5'] },
    { category: SongCategory.TRAD, name: 'St Patrick An Dro', notes: ['G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'G5'] },
    { category: SongCategory.TRAD, name: 'O Son Do Ar', notes: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5'] },
    { category: SongCategory.TRAD, name: 'Tzadir katamar', notes: ['E4', 'G♯4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5'] },
    { category: SongCategory.TRAD, name: 'C’est sur le pont de Lyon', notes: ['E4', 'G4', 'A4', 'B4', 'C5', 'D5'] },
    { category: SongCategory.TRAD, name: 'La p’tite fée', notes: ['A3', 'B3', 'C4', 'D4', 'D♯4', 'E4', 'F♯4', 'G4', 'A4', 'B4', 'C5'] },
    { category: SongCategory.FOLK, name: 'Greensleeves', notes: ['A3', 'B3', 'C4', 'C♯4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'] },
    { category: SongCategory.IRISH, name: 'The Kesh Jig', notes: ['D4', 'F♯4', 'G4', 'A4', 'B4', 'D5', 'E5', 'G5', 'A5', 'B5'] },
    {
        category: SongCategory.IRISH,
        name: 'Cooney’s reel',
        notes: ['D4', 'E4', 'F♯4', 'G4', 'A4', 'B4', 'C♯5', 'D5', 'E5', 'F♯5', 'G5', 'A5'],
        recording:
            'D4@0,E4@280,B4@420,B4@560,A4@700,B4@840,E4@1120,B4@1260,B4@1400,A4@1680,B4@1820,D5@1960,B4@2100,A4@2240,G4@2380,F♯4@2520,D4@2660,A4@2800,D4@2940,B4@3080,D4@3220,A4@3360,D4@3500,F♯4@3640,D4@3780,A4@3920,D4@4060,D5@4200,A4@4340,F♯4@4480,D4@4620,E4@4760,B4@4900,B4@5040,A4@5180,B4@5320,E4@5600,B4@5740,B4@5880,A4@6160,B4@6300,D5@6440,E5@6580,F♯5@6720,G5@6860,A5@7000,F♯5@7140,E5@7280,C♯5@7420,D5@7560,B4@7700,A4@7840,F♯4@7980,D4@8120,E4@8260,F♯4@8400,D4@8540,E4@8680,G5@8960,F♯5@9100,E5@9240,B4@9380,B4@9520,E5@9800,F♯5@9940,G5@10080,E5@10220,E5@10360,B4@10500,B4@10640,G5@10920,E5@11060,D5@11200,B4@11340,A4@11480,F♯4@11760,A4@11900,D4@12040,A4@12180,F♯4@12320,A4@12460,A4@12600,F♯4@12880,A4@13020,D5@13160,E5@13300,F♯5@13440,G5@13580,E5@13720,B4@13860,B4@14000,E5@14280,B4@14420,G5@14560,B4@14700,E5@14840,B4@14980,B4@15120,D5@15400,E5@15540,F♯5@15680,G5@15820,A5@15960,F♯5@16100,E5@16240,C♯5@16380,D5@16520,B4@16660,A4@16800,F♯4@16940,D4@17080,E4@17220,F♯4@17360,D4@17500,E4@17640,end@17920',
    },
    {
        category: SongCategory.IRISH,
        name: 'Lannigan’s Ball',
        notes: ['D4', 'E4', 'F♯4', 'G4', 'A4', 'B4', 'C5', 'C♯5', 'D5', 'E5', 'F♯5', 'G5', 'A5'],
    },
    { category: SongCategory.IRISH, name: 'Father O’Flynn', notes: ['D4', 'F♯4', 'G4', 'A4', 'B4', 'C♯5', 'D5', 'E5', 'F♯5', 'G5', 'A5'] },
    { category: SongCategory.IRISH, name: 'Star of the County Down', notes: ['E4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'G5'] },
    { category: SongCategory.IRISH, name: 'Drowsy Maggie', notes: ['D4', 'E4', 'F♯4', 'A4', 'B4', 'C♯5', 'D5', 'E5', 'F♯5', 'G5', 'A5'] },
    { category: SongCategory.IRISH, name: 'Killavil jig', notes: ['D4', 'E4', 'F♯4', 'A4', 'B4', 'D5', 'E5', 'F♯5', 'G5'] },
    { category: SongCategory.IRISH, name: 'Musical priest', notes: ['F♯4', 'A4', 'B4', 'C♯5', 'D5', 'E5', 'F♯5', 'A5', 'B5'] },
    { category: SongCategory.IRISH, name: 'Trip to Pakistan', notes: ['D4', 'E4', 'F♯4', 'G4', 'A4', 'B4', 'C5'] },
    { category: SongCategory.PAGAN, name: 'Fairy tale', notes: ['B3', 'D4', 'E4', 'F♯4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F♯5', 'G5'] },
] as Song[]
