
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        {id: 99901, name: 'Ardie Savea', position:'flanker', team: 'Hurricanes', profile_pic:'http://media.allblacks.com/dnaImages/PlayersSecondary/p2134.jpg'},
        {id: 99902, name: 'Brodie Retallick', position:'lock', team: 'Cheifs', profile_pic:'http://media.allblacks.com/dnaImages/PlayersSecondary/p2131.jpg'},
        {id: 99903, name: 'Codie Taylor', position:'hooker', team: 'Crusaders', profile_pic:'http://media.allblacks.com/dnaImages/PlayersSecondary/p1940.jpg'},
        {id: 99904, name: 'Jeffery Toomaga-Allen', position:'prop', team: 'Hurricanes', profile_pic:'http://media.allblacks.com/dnaImages/PlayersSecondary/p2357.jpg'},
        {id: 99905, name: 'Joe Moody', position:'prop', team: 'Crusaders', profile_pic:'http://media.allblacks.com/dnaImages/PlayersSecondary/p2400.jpg'},
        {id: 99906, name: 'Jordan Taufua', position:'flanker', team: 'Crusaders', profile_pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8w0XE06IKCRvyabBdolj5QAXyeokiakkCTztx1PY5nn0dk8B9A'},
        {id: 99907, name: 'Karl Tuinukuafe', position:'prop', team: 'Cheifs', profile_pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHTOmwBMa3lmpNo5UiG_RvEjgto-NfmTu8DxmwVXwv11Eo3gvdiw'},
        {id: 99908, name: 'Liam Squire', position:'flanker', team: 'Highlanders', profile_pic:'http://media.allblacks.com/dnaImages/PlayersSecondary/p2346.jpg'},
        {id: 99909, name: 'Luke Romano', position:'lock', team: 'Crusaders', profile_pic:'http://media.allblacks.com/dnaImages/PlayersSecondary/p2183.jpg'},
        {id: 99910, name: 'Luke Whitelock', position:'flanker', team: 'Highlanders', profile_pic:'https://media.gettyimages.com/photos/luke-whitelock-of-new-zealand-poses-for-a-portrait-during-a-new-all-picture-id871150810?k=6&m=871150810&s=612x612&w=0&h=gLezgT8G2ZBCfiCmM4w42xhIP2QpuSHY_-8EZuE9MA8='},
        {id: 99911, name: 'Matt Todd', position:'flanker', team: 'Crusaders', profile_pic:'http://media.allblacks.com/dnaImages/PlayersSecondary/p2119.jpg'},
        {id: 99912, name: 'Nathan Harris', position:'hooker', team: 'Cheifs', profile_pic:'http://media.allblacks.com/dnaImages/PlayersSecondary/p2170.jpg'},
        {id: 99913, name: 'Ofa Tuungafasi', position:'prop', team: 'Blues', profile_pic:'http://media.allblacks.com/dnaImages/PlayersSecondary/p1942.jpg'},
        {id: 99914, name: 'Owen Franks', position:'prop', team: 'Crusaders', profile_pic:'http://media.allblacks.com/dnaImages/PlayersSecondary/p1825.jpg'},
        {id: 99915, name: 'Sam Cane', position:'flanker', team: 'Cheifs', profile_pic:'http://media.allblacks.com/dnaImages/PlayersSecondary/p1922.jpg'},
        {id: 99916, name: 'Samuel Whitelock', position:'lock', team: 'Crusaders', profile_pic:'http://media.allblacks.com/dnaImages/PlayersSecondary/p1800.jpg'},
        {id: 99917, name: 'Scott Barrett', position:'lock', team: 'Crusaders', profile_pic:'http://media.allblacks.com/dnaImages/PlayersSecondary/p2290.jpg'},
        {id: 99918, name: 'Shannon Frizell', position:'flanker', team: 'Highlanders', profile_pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_bSfuOp7zpoUrPS3v-GEZYOVYDyn2zYVyYQAW50G9KbPeqJV'},
        {id: 99919, name: 'Tim Perry', position:'prop', team: 'Crusaders', profile_pic:'http://media.allblacks.com/dnaImages/PlayersSecondary/p2733.jpg'},
        {id: 99920, name: 'Tom Franklin', position:'lock', team: 'Highlanders', profile_pic:'https://www.odt.co.nz/sites/default/files/styles/odt_portrait_medium_3_4/public/gettyimages-966975686.jpg?itok=UxhwSCwo'},
        {id: 99921, name: 'Vaea Fifita', position:'flanker', team: 'Hurricanes', profile_pic:'http://media.allblacks.com/dnaImages/PlayersSecondary/p2646.jpg'},
        {id: 99922, name: 'Aaron Smith', position:'backs', team: 'Highlanders', profile_pic:'http://media.allblacks.com/dnaImages/PlayersSecondary/p1856.jpg'},
        {id: 99923, name: 'Anton Lienert-Brown', position:'center', team: 'Cheifs', profile_pic:'http://media.allblacks.com/dnaImages/PlayersSecondary/p2386.jpg'},
        {id: 99924, name: 'Beauden Barrett', position:'backs', team: 'Hurricanes', profile_pic:'http://media.allblacks.com/dnaImages/PlayersSecondary/p1965.jpg'},
        {id: 99925, name: 'Ben Smith', position:'backs', team: 'Highlanders', profile_pic:'http://media.allblacks.com/dnaImages/PlayersSecondary/p1832.jpg'},
        {id: 99926, name: 'Damian McKenzie', position:'backs', team: 'Cheifs', profile_pic:'http://media.allblacks.com/dnaImages/PlayersSecondary/p2211.jpg'},
        {id: 99927, name: 'Jack Goodhue', position:'backs', team: 'Crusaders', profile_pic:'http://media.allblacks.com/dnaImages/PlayersSecondary/p2473.jpg'},
        {id: 99928, name: 'Jordie Barrett', position:'backs', team: 'Hurricanes', profile_pic:'http://www1.pictures.zimbio.com/gi/Jordie+Barrett+New+Zealand+U20s+Headshots+tAb5SLQXT0Sl.jpg'},
        {id: 99929, name: 'Nehe Milner-Skudder', position:'backs', team: 'Hurricanes', profile_pic:'https://i.pinimg.com/originals/0e/6f/2c/0e6f2cf6ff092c32465dc56c3ffbd43e.jpg'},
        {id: 99930, name: 'Ngani Laumape', position:'backs', team: 'Hurricanes', profile_pic:'http://media.allblacks.com/dnaImages/PlayersSecondary/p2147.jpg'},
        {id: 99931, name: 'Richie Mounga', position:'backs', team: 'Crusaders', profile_pic:'https://media.gettyimages.com/photos/richie-mounga-of-new-zealand-poses-for-a-portrait-during-a-new-all-picture-id871150634?k=6&m=871150634&s=594x594&w=0&h=C30vm78RgYO1D8OL_QI3uVDgw1m8Hgp9XukkkrJUmzk='},
        {id: 99932, name: 'Rieko Ioane', position:'backs', team: 'Blues', profile_pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxt9PENNgV8eXcUhhhGA_X9q8w_8AKoY4whNm8Jvt8agQOukqing'},
        {id: 99933, name: 'Ryan Crotty', position:'backs', team: 'Crusaders', profile_pic:'http://media.allblacks.com/dnaImages/PlayersSecondary/p1784.jpg'},
        {id: 99934, name: 'Sonny Bill Williams', position:'backs', team: 'Blues', profile_pic:'http://media.allblacks.com/dnaImages/PlayersSecondary/p1784.jpg'},
        {id: 99935, name: 'Te Toiroa Tahuriorangi', position:'backs', team: 'Cheifs', profile_pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPDV0QEoe6qHbE8KSJN11wf8fN7SxnSMavrdKQ6TA5WsqGGmhziA'},
        {id: 99937, name: 'Waisake Naholo', position:'backs', team: 'Hurricanes', profile_pic:'http://media.allblacks.com/dnaImages/PlayersSecondary/p2121.jpg'}
      ]);
    });
};
