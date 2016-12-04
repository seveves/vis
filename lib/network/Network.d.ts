
declare module network {

    interface IOptions {
    
        /**
          * @type {boolean}
          */
        autoResize: boolean;
    
        /**
          * @type {string}
          */
        width: string;
    
        /**
          * @type {string}
          */
        height: string;
    
        /**
          * @type {string}
          */
        locale: string;
    
        /**
          * @type {any} 
          */
        locales: any;
    
        /** 
          * @type {boolean}
          */
        ckickToUse: boolean;
    }

    interface INetworkData {
    
        /**
          * @type {any|any[]}
          */
        nodes: any|any[];
    
        /**
          * @type {any|any[]}
          */
        edges: any|any[];
    }

    interface IPosition {
    
        /**
          * @type {number}
          */
        x: number;
    
        /**
          * @type {number}
          */
        y: number;
    }

    interface INetwork {
    
        /**
          * @param {network.INetworkData} data
          */
        setData(data: network.INetworkData): void;
    
        /**
          * @param {network.IOptions} options
          */
        setOptions(options: network.IOptions): void;
    
        /**
          * @param {network.IPosition} position
          * @return {network.IPosition}
          */
        canvasToDOM(position: network.IPosition): network.IPosition;
    
        /**
          * @return {boolean}
          */
        isActive(): boolean;
    
        /**
          * @param {string} width
          * @param {string} height
          */
        setSize(width: string, height: string): void;
    }

    class Network extends Network__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Network__Class implements INetwork  { 
    
            /**
             * @constructor
             * @implements {INetwork}
             * @param {Element} container   The DOM element in which the Network will
             *                                  be created. Normally a div element.
             * @param {Object} data         An object containing parameters
             *                              {Array} nodes
             *                              {Array} edges
             * @param {Object|number} options      Options
             */
            constructor(container: Element, data: Object, options: Object|number);
    
            /**
             * Bind all events
             */
            bindEventListeners(): void;
    
            /**
             * Cleans up all bindings of the network, removing it fully from the memory IF the variable is set to null after calling this function.
             * var network = new vis.Network(..);
             * network.destroy();
             * network = null;
             * 
             */
            destroy(): void;
    } 
    
}
