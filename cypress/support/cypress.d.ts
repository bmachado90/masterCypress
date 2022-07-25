declare namespace Cypress {
  interface AppsContextUser {
    username: string
  }

  interface AppsContext {
    user?: AppsContextUser
  }

  interface MapFeature {
    id: string
    layer: string
    type: string
    gFeature?: google.maps.Marker
  }

  type MapFeatureWithMarker = MapFeature & {
    gFeature: google.maps.Marker
  }

  interface PortalLayersModule {
    getActiveLayers(): Array<string>
  }

  interface PortalFeaturesModule {
    getFeatures(layerName: string): Array<MapFeature>
  }

  interface PortalApps {
    Features: PortalFeaturesModule
    Layers: PortalLayersModule
  }

  interface Elgin {
    map?: google.maps.Map
    App: PortalApps
  }

  interface ApplicationWindow {
    /**
     * Application context, injected by platform on start
     */
    appsContext?: AppsContext

    /**
     * Elgin object, injected by portal
     */
    Elgin?: Elgin

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    google: any
  }
}
