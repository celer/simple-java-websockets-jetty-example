import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.handler.ResourceHandler;
import org.eclipse.jetty.websocket.server.WebSocketHandler;
import org.eclipse.jetty.websocket.servlet.WebSocketServletFactory;
import org.eclipse.jetty.server.handler.ContextHandler;
import org.eclipse.jetty.server.handler.HandlerList;
import org.eclipse.jetty.server.handler.DefaultHandler;
import org.eclipse.jetty.server.Handler;


public class WebSocketTest {

    public static void main(String[] args) throws Exception {
        Server server = new Server(8080);
        WebSocketHandler wsHandler = new WebSocketHandler() {
            @Override
            public void configure(WebSocketServletFactory factory) {
                factory.register(MyWebSocketHandler.class);
            }
        };

	

	ResourceHandler resourceHandler = new ResourceHandler();
    	resourceHandler.setResourceBase(".");
	resourceHandler.setDirectoriesListed(true);
	resourceHandler.setWelcomeFiles(new String[]{"index.html"});

	HandlerList handlers = new HandlerList();
        handlers.setHandlers(new Handler[] { wsHandler, resourceHandler, new DefaultHandler() });

        server.setHandler(handlers);
        server.start();
        server.join();
    }
}
