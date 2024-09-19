<?php

/**

 * The base configuration for WordPress

 *

 * The wp-config.php creation script uses this file during the installation.

 * You don't have to use the website, you can copy this file to "wp-config.php"

 * and fill in the values.

 *

 * This file contains the following configurations:

 *

 * * Database settings

 * * Secret keys

 * * Database table prefix

 * * ABSPATH

 *

 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/

 *

 * @package WordPress

 */



// ** Database settings - You can get this info from your web host ** //

/** The name of the database for WordPress */

define( 'DB_NAME', 'edelisle_pw_tp1_bd' );



/** Database username */

define( 'DB_USER', 'edelisle_pw_tp1_u' );



/** Database password */

define( 'DB_PASSWORD', 'Cacabinou7$' );



/** Database hostname */

define( 'DB_HOST', 'localhost' );



/** Database charset to use in creating database tables. */

define( 'DB_CHARSET', 'utf8mb4' );



/** The database collate type. Don't change this if in doubt. */

define( 'DB_COLLATE', '' );



/**#@+

 * Authentication unique keys and salts.

 *

 * Change these to different unique phrases! You can generate these using

 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.

 *

 * You can change these at any point in time to invalidate all existing cookies.

 * This will force all users to have to log in again.

 *

 * @since 2.6.0

 */

define( 'AUTH_KEY',         'j0-lXkuI1*pE5Coaq>0-~dPwH-N 3fzU3-d((+jHq?y!Go`yISw+4:JNO}9/$f<#' );

define( 'SECURE_AUTH_KEY',  '5,p#vBOpt~&b:!5`:a4kxS^{avPj|mG>OD#Gc~i11LxLbW-W]XYvt-niqtXzdz>W' );

define( 'LOGGED_IN_KEY',    ',&X-f^nb:,)@/!=Ke!4uKG<7 i]$2Dy^6Z,-/&<6X/5/K6nST|a?0?N@&R>cqPJt' );

define( 'NONCE_KEY',        'wu[b]gE|ycJM|hp3z@QnEskEqWi(F <c`)~?&Q_f^[|H:)r/o1[%*#bPW=:p=Xq[' );

define( 'AUTH_SALT',        'dKf$Ms(7Q$#b$Cc< ^Ha6GXKy_98g(n+[wz,9_kEe*e==Y6#IA,Li-},p+mN0($/' );

define( 'SECURE_AUTH_SALT', ',{@0oUaLbM0b#8@vTROI,HuhRxpr-)$:iB* Wz`.`hYd]G)f]t*Vug^c@NYSmOfP' );

define( 'LOGGED_IN_SALT',   '95_&4M[-~*zc{f|Uxbp*32#L1U:-8xWWJTn}bJ?~?n)U9=P0$FRmlb`8/Hp_G,/T' );

define( 'NONCE_SALT',       '8!LOP}n@%1T]EU_Ip0b1v=FUri;ED}&2o.ED}we>K^}LNJtvPc=CgGga|e6l`LLS' );



/**#@-*/



/**

 * WordPress database table prefix.

 *

 * You can have multiple installations in one database if you give each

 * a unique prefix. Only numbers, letters, and underscores please!

 */

$table_prefix = 'wp_';



/**

 * For developers: WordPress debugging mode.

 *

 * Change this to true to enable the display of notices during development.

 * It is strongly recommended that plugin and theme developers use WP_DEBUG

 * in their development environments.

 *

 * For information on other constants that can be used for debugging,

 * visit the documentation.

 *

 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/

 */

define( 'WP_DEBUG', true);



/* Add any custom values between this line and the "stop editing" line. */







/* That's all, stop editing! Happy publishing. */



/** Absolute path to the WordPress directory. */

if ( ! defined( 'ABSPATH' ) ) {

	define( 'ABSPATH', __DIR__ . '/' );

}



/** Sets up WordPress vars and included files. */

require_once ABSPATH . 'wp-settings.php';

