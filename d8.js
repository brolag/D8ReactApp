/**
 * ListNotifications
 *
 * Componente contenedor de notificaciones.
 */
class ListNotifications extends React.Component {

  // Obtiene los datos a partir del endpoint servido desde Drupal.
  _getNotificationsResponse(context) {
      $.ajax({
            type: 'GET',
            async: false,
            url: 'http://local.d8react.com/notifications',
            crossDomain: true,
            success: function(data, textStatus, request){
              context.data = data;
            }
          });
  }

  // Genera una lista de notificaciones.
  _getNotifications() {
    const context = this;
    this._getNotificationsResponse(context);
    const notifications = context.data;
    const formattedNotifications = notifications.map((notification) => {
      return (
        <Notification title={notification.title[0].value} body={notification.body[0].value} />
      );
    });
    return formattedNotifications;
  }

  // Imprime las notificaciones.
  render() {
    const notifications = this._getNotifications();
    return ( <div>{notifications}</div>);
    }
}

/**
 * Notification
 *
 * Componente notificacion.
 */
class Notification extends React.Component {

 render() {
        return (
            <div className="notification">
                <h4 className="noti-title" dangerouslySetInnerHTML={{__html: this.props.title}} />
                <p className="noti-body" dangerouslySetInnerHTML={{__html: this.props.body}} />
            </div>
        )
    }
}

// Imprime los datos en el div indicado.
let target = document.getElementById('main');
ReactDOM.render(<ListNotifications/>, target);

