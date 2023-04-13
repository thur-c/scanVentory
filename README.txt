style={{
	shadowColor: '#fff',
	shadowOffset: {
		width: 0,
		height: 7,
	},
	shadowOpacity: 0.41,
	shadowRadius: 9.11,

	elevation: 24,

}}


  const db = req.app.locals.db as sql.ConnectionPool;
  const request = new sql.Request(db);

  request.input('dc_equipamento', sql.VarChar(20), dc_equipamento);
  request.input('nome', sql.VarChar(50), nome);
  request.input('qnt_tomadas', sql.Int(), qnt_tomadas);
  request.input('bivolt', sql.Int(), bivolt);
  request.input('entrada', sql.Int(), entrada);
  request.input('saida', sql.Int(), saida);

  request.query(
    'INSERT INTO dbo.LogTablet (Bateria, Carregando, IpAddress, Rede, Ram)   (@bateria, @carregando, @ip, @rede, @ram)',
    (err: Error | undefined, result: sql.IResult<unknown> | undefined) => {
      if (err) {
        console.error(err);
        res.status(500).send('SERVER ERROR');
        return;
      }

      res.status(200).json(result?.recordset);
    },
  );
