export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getTranslations' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text, IDL.Text))],
        ['query'],
      ),
    'storeTranslation' : IDL.Func([IDL.Text, IDL.Text, IDL.Text], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
