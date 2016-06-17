public function Asignatura($URLid)
	{
		$perfil = Perfile::find($URLid);
		$asignaturas = Perfile::find($perfil->id)->asignaturas;

		$datos = [];
		foreach ($asignaturas as $key) {

			$basignatura = Asignatura::find($key->id);
			$requisitos = Asignatura::find($basignatura->id)->requisitos;

			//echo "Asignatura:" . $basignatura . '<br>';
			//echo "Requisito:" . $requisitos . '<br>';

			$temp = [];

			foreach ($requisitos as $key => $requisito) {
				$temp[] = array('requisito' => $requisito->requisito);
				$datos2 = array('asignatura_id' => substr($basignatura->asignatura_id, 0, -1), 'asignatura' => $basignatura->asignatura, 'creditos' => $basignatura->creditos, 'tipologia' => $basignatura->tipologia, 'agrupacion' => $basignatura->agrupacion, 'requisitos' => $temp);
			}
			$datos[] = $datos2;
		}
		//return var_dump($datos);
		return View::make('rutas.asignaturasajax')	->with('datos', $datos)
													->with('perfil', $perfil->id)
													->with('perfil_nombre', $perfil->perfil);
	}
