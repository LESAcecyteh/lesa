<?php include ('../php/cabecera.php'); ?>
<?php include ('../php/cuarto_J_.php'); ?>
<div class="col-7">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Matricula</th>
                    <th scope="col">Grado y Grupo</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Hora</th>
                </tr>
            </thead>
            <tbody>
            <?php foreach($listaCuartoJ as $cuartoJ) { ?>
                <tr >
                    <td><?php echo $cuartoJ['Id_Nombre']; ?></td>
                    <td><?php echo $cuartoJ['Matricula']; ?></td>
                    <td><?php echo $cuartoJ['Grado y Grupo']; ?></td>
                    <td><?php echo $cuartoJ['Fecha']; ?></td>
                    <td><?php echo $cuartoJ['Hora']; ?></td>
                    <td>
                        <form action="" method="post">
                        <input type="text" name="id" id="id" value="<?php echo $cuartoJ['Id_Nombre']; ?>" />
                        <input type="submit" value="Seleccionar" name="accion" class="btn btn-info">    
                        </form>
                    </td>
                </tr>
                <?php }?>
            </tbody>
        </table>
    </div>
    <?php include ('../php/pie.php'); ?>