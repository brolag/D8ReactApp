class ListNotifications extends React.Component {

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

  _getNotifications() {
    const context = this;
    this._getNotificationsResponse(context);
    const notifications = context.data;
    const formattedNotifications = notifications.map((notification) => {
      return (
        <h4 className="noti-title">{notification.title[0].value}</h4>
      );
    });
    return formattedNotifications;
  }

  render() {
    const notifications = this._getNotifications();
    console.log('asfasdf', notifications);
    return ( <div>{notifications}</div>);
  }

}

let target = document.getElementById('main');

ReactDOM.render(<ListNotifications/>, target);

