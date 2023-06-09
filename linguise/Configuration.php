<?php
namespace Linguise\Script;

if (!defined('LINGUISE_SCRIPT_TRANSLATION')) die();

class Configuration {
    /** Mandatory configuration **/
    public static $token = 'kGoAffWclxO2MAgVrDAhoFNV0AawqKPe'; //Replace the token by the one found in your Linguise dashboard

    /** Basic configuration **/
    public $cache_enabled = true;
    public $cache_max_size = 500; // In megabyte

    /** Advanced configuration **/
    public static $cms = 'auto';
    public static $server_ip = null;
    public static $server_port = 443;
    public static $debug = false;
    public static $data_dir = null;
    public static $base_dir = null;
    public static $dl_certificates = false;

    /** Development configuration */
    public static $port = 443;
    public static $host = 'translate.linguise.com';
    public static $update_url = 'https://www.linguise.com/files/php-script-update.json';
}
