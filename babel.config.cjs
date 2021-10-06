// module.exports = {
//   presets: [
//     [
//       '@babel/preset-env',
//       {
//         targets: {
//           node: 'current',
//         },
//       },
//     ],
//   ],
// };

module.exports = function(api) {
  api.cache(true);
  return {
    presets: [ [ '@babel/preset-env', { targets: { node: 'current', }, }, ], ],
  };
};