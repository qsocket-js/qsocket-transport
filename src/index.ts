import QSocketTransportEIOLatest from '@qsocket/transport-engine.io-latest';
import QSocketTransportEIOV3 from '@qsocket/transport-engine.io-v3';
import QSocketTransportEIOClientLatest from '@qsocket/transport-engine.io-client-latest';
import QSocketTransportEIOClientV3 from '@qsocket/transport-engine.io-client-v3';

export { QSocketTransportEIOLatest, QSocketTransportEIOV3, QSocketTransportEIOClientLatest, QSocketTransportEIOClientV3 };

/**
 * @constant {Class} QSocketTransportEIOLatestServer
 * @description The Server class from the latest version of the engine.io transport.
 * Use this to create server instances with the latest engine.io features.
 * @example
 * const server = new QSocketTransportEIOLatestServer({ /* configurations * / });
 */
export const QSocketTransportEIOLatestServer = QSocketTransportEIOLatest.Server;

/**
 * @constant {Class} QSocketTransportEIOV3Server
 * @description The Server class from engine.io version 3 transport.
 * Ideal for applications requiring compatibility with older versions of engine.io.
 * @example
 * const legacyServer = new QSocketTransportEIOV3Server({ /* configurations * / });
 */
export const QSocketTransportEIOV3Server = QSocketTransportEIOV3.Server;

/**
 * @constant {Class} QSocketTransportEIOClientLatestSocket
 * @description The Socket class from the latest version of engine.io-client transport.
 * Use this to create client-side connections with the latest engine.io-client features.
 * @example
 * const clientSocket = new QSocketTransportEIOClientLatestSocket({ /* configurations * / });
 */
export const QSocketTransportEIOClientLatestSocket = QSocketTransportEIOClientLatest.Socket;

/**
 * @constant {Class} QSocketTransportEIOClientV3Socket
 * @description The Socket class from engine.io-client version 3 transport.
 * Suitable for legacy support, enabling connections compatible with engine.io-client v3.
 * @example
 * const legacyClientSocket = new QSocketTransportEIOClientV3Socket({ /* configurations * / });
 */
export const QSocketTransportEIOClientV3Socket = QSocketTransportEIOClientV3.Socket;
