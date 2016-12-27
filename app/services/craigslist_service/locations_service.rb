module CraigslistService
  class LocationsService
    def persist(all_locations)
      persist_regions(all_locations)
    end

    private

    def persist_regions(all_locations)
      all_locations.each do |region_name, districts|
        region = Region.find_or_create_by!(
          name: region_name
        )
        persist_districts(districts, region.id)
      end
    end

    def persist_districts(districts, region_id)
      districts.each do |district_name, areas|
        district = District.find_or_initialize_by(
          name: district_name
        )
        district.region_id = region_id
        district.save!
        persist_areas(areas, district.id)
      end
    end

    def persist_areas(areas, district_id)
      areas.each do |area_name, url|
        area = Area.find_or_initialize_by(
          name: area_name
        )
        area.district_id = district_id
        area.url = url
        area.save!
      end
    end
  end
end